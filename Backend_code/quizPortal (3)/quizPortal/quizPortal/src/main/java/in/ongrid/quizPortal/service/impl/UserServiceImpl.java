package in.ongrid.quizPortal.service.impl;

import in.ongrid.quizPortal.dao.UserDao;
import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.model.dto.*;
import in.ongrid.quizPortal.service.UserService;
import in.ongrid.quizPortal.service.UserSessionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao userDao;
    @Autowired
    UserSessionService userSessionService;
    @Autowired
    UserSessionDao userSessionDao;

    @Override
    public SignUpUserResponse signUp(SignUpUserRequest request) {

        if (request == null) throw new IllegalArgumentException("invalid request.");

        if (StringUtils.isBlank(request.getName())) throw new IllegalArgumentException("Name cannot be null or empty.");

        if (StringUtils.isBlank(request.getEmail()) || !request.getEmail().matches("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"))
            throw new IllegalArgumentException("Email id is not correct.");

        if (StringUtils.isBlank(request.getMobile()) || !request.getMobile().matches("\\d{10}"))
            throw new IllegalArgumentException("Mobile number is not correct.");

        if (StringUtils.isBlank(request.getPassword())) throw new IllegalArgumentException("Password cannot be null or empty.");

        if (!request.getPassword().matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$"))
            throw new IllegalArgumentException("At list one upper letter ,At list one lower letter,At list one integer number , At list one special character, without any space and lenght at list 8 character. ");

        Date date = new Date();

        if (request.getDateOfBirth() != null && (request.getDateOfBirth()).compareTo(date) > 0)
            throw new IllegalArgumentException("Please enter valid Date Of Birth.");

        if (userDao.findByEmail(request.getEmail()) != null)
            throw new IllegalArgumentException(" This email id is already exist.");

        if (userDao.findByMobile(request.getMobile()) != null)
            throw new IllegalArgumentException(" This mobile number is already exist.");

        User user = new User();
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);

        user.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));

        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setMobile(request.getMobile());
        user.setGender(request.getGender());
        user.setDateOfBirth(request.getDateOfBirth());


        userDao.save(user);

        UserSession userSession = userSessionService.CreateToken(user);

        if (userSession == null) throw new IllegalArgumentException("Token not generated.");

        String token = userSession.getToken();
        SignUpUserResponse signupResponse = new SignUpUserResponse();

        signupResponse.setName(request.getName());

        signupResponse.setToken(token);

        return signupResponse;

    }

    @Override
    public UpdateUser updateProfile(String token, UpdateUser request) {

        if (request == null) throw new IllegalArgumentException("Invalid request.");

        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null || userSession.getSignOutTime() != null)
            throw new IllegalArgumentException("You are not authorized to update the profile.");

        if (StringUtils.isBlank(request.getName()))
            throw new IllegalArgumentException("Name cannot be null or empty.");

        if (StringUtils.isBlank(request.getMobile()) || !request.getMobile().matches("\\d{10}"))
            throw new IllegalArgumentException("Mobile number is not correct.");

        Date date = new Date();

        if (request.getDateOfBirth() != null && (request.getDateOfBirth()).compareTo(date) > 0)
            throw new IllegalArgumentException("Please enter valid Date Of Birth.");

        User user = userSession.getUser();

        if (!user.getMobile().equals(request.getMobile()) && userDao.findByMobile(request.getMobile()) != null)
            throw new IllegalArgumentException("This mobile number is already exist.");


        user.setGender(request.getGender());
        user.setName(request.getName());
        user.setDateOfBirth(request.getDateOfBirth());
        user.setMobile(request.getMobile());
        userDao.save(user);
        return request;


    }

    @Override
    public LoginResponse Login(LoginRequest request) {

        if (request == null) throw new IllegalArgumentException("Invalid request.");

        if (StringUtils.isBlank(request.getEmail()) || !request.getEmail().matches("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"))
            throw new IllegalArgumentException("Email id is not correct.");

        User user = userDao.findByEmail(request.getEmail());

        if (user == null) throw new IllegalArgumentException("Couldn't find Email id.");

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);

        if (StringUtils.isBlank(request.getPassword()) || !bCryptPasswordEncoder.matches(request.getPassword(), user.getPassword()))
            throw new IllegalArgumentException("Wrong password.");

        String token = userSessionService.CreateToken(user).getToken();
        LoginResponse LoginResponse = new LoginResponse();
        LoginResponse.setName(user.getName());
        LoginResponse.setToken(token);
        return LoginResponse;
    }

    @Override
    public void Logout(String token) {
        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null) throw new IllegalArgumentException("Invalid token.");

        userSession.setSignOutTime(new Date());
        userSessionDao.save(userSession);

    }

    @Override
    public User getProfile(String token) {

        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null || userSession.getSignOutTime() != null)
            throw new IllegalArgumentException("Invalid token.");

        return userSession.getUser();
    }


}
