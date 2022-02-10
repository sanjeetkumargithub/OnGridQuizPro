package in.ongrid.quizPortal.service.impl;

import in.ongrid.quizPortal.dao.UserDao;
import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.model.dto.CreateUserRequest;
import in.ongrid.quizPortal.model.dto.SignUpLoginResponce;
import in.ongrid.quizPortal.model.dto.UpdateUser;
import in.ongrid.quizPortal.service.UserService;
import in.ongrid.quizPortal.service.UserSessionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl  implements UserService {
    @Autowired
     UserDao userDao;
    @Autowired
     UserSessionService userSessionService;
    @Autowired
    UserSessionDao userSessionDao;



//  User Create Account
    @Override
    public SignUpLoginResponce createUser(CreateUserRequest request)  {


        if( StringUtils.isBlank(request.getMobile())) throw new IllegalArgumentException("Mobile number cannot be null.");
        if( StringUtils.isBlank(request.getName())) throw new IllegalArgumentException("Name cannot be null.");
        if(StringUtils.isBlank(request.getEmail())) throw new IllegalArgumentException("Email cannot be null.");
        if(StringUtils.isBlank(request.getPassword())) throw new IllegalArgumentException("Password cannot be null.");

        if(!request.getEmail().matches("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"))
            throw new IllegalArgumentException("Enter valid email id.");
        if(StringUtils.isBlank(request.getMobile())||request.getMobile().length()!=10)
            throw new IllegalArgumentException("Mobile number must be 10 digit.");
        if(userDao.findByMobile(request.getMobile())!=null )
            throw new IllegalArgumentException("User with this mobile number already exists.");
        if(userDao.findByEmail(request.getEmail())!=null)
            throw new IllegalArgumentException("User with this email already exists.");
        //To validate and set password
        if(!request.getPassword().matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$"))
            throw new IllegalArgumentException( "At list one upper letter ,At list one lower letter,At list one integer number , At list one special character, without any space and lenght at list 8 character. ");
        Date dt=new Date();
        if((request.getDateOfBirth()).compareTo(dt)>0 )
            throw new IllegalArgumentException("please enter valid Date Of Birth.");
        if (!request.getMobile().matches("\\d{10}"))
            throw new   IllegalArgumentException("Please enter a valid mobile number.");

        // Create a User object
        User user=new User();
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
            user.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));

            user.setEmail(request.getEmail());
            user.setName(request.getName());
            user.setMobile(request.getMobile());
            user.setGender(request.getGender());
            user.setDateOfBirth(request.getDateOfBirth());

            // user data save in user table
              userDao.save(user);
             // Creating a token by help of GenerateToken package-> TokenGenerate class -> CreateToken function()
            // -> return userSession type date
            // after that we getToken String type of date in token

           String token = userSessionService.CreateToken(user).getToken();
           SignUpLoginResponce UserReturn =new SignUpLoginResponce();
            UserReturn.setName(request.getName());
           UserReturn.setToken(token);

           return  UserReturn;


    }

    // user update our account
    @Override
    public UpdateUser updateUser(String token, UpdateUser request) {

        UserSession userSession=userSessionDao.findByToken(token);
        if (userSession.getToken() !=null&&userSession.getSignouttime()==null) {
                User user = userSession.getUser();

            if (StringUtils.isNotBlank(request.getMobile()) && request.getMobile().length() != 10)
                throw new IllegalArgumentException("Mobile number must be 10 digit.");
            if (!request.getMobile().matches("\\d{10}"))
                throw new IllegalArgumentException("Please enter a valid mobile number.");

            if (!user.getMobile().equals(request.getMobile())) {
                if (userDao.findByMobile(request.getMobile()) != null)
                  throw new IllegalArgumentException("User with this mobile number already exists.");
            }
            Date dt = new Date();
            if (request.getDateOfBirth() != null && (request.getDateOfBirth()).compareTo(dt) > 0)
                throw new IllegalArgumentException("please enter valid Date Of Birth.");

            if (request.getGender() != null)
                user.setGender(request.getGender());
            if (StringUtils.isNotBlank(request.getName()))
                user.setName(request.getName());
            if (request.getDateOfBirth() != null)
                user.setDateOfBirth(request.getDateOfBirth());
            user.setMobile(request.getMobile());
            userDao.save(user);
            return request;
            }
            throw new IllegalArgumentException( "user not Authorize to update our account.");
    }

    // user login  Account
    @Override
    public SignUpLoginResponce userLogin(CreateUserRequest request) {
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
            User user= userDao.findByEmail(request.getEmail());
            if(!user.getEmail().equals(request.getEmail()))
                throw new IllegalArgumentException("Email id does not exit.");

           if(!bCryptPasswordEncoder.matches( request.getPassword(),user.getPassword())  )
               throw new IllegalArgumentException("Your password is wrong.");

                     String token = userSessionService.CreateToken(user).getToken();
                     SignUpLoginResponce UserResponse =new SignUpLoginResponce();
                     UserResponse.setName(user.getName());
                     UserResponse.setToken(token);

                     return  UserResponse;

    }
    // User Logout
    @Override
    public void UserLogout(String token) {
        if(userSessionDao.findByToken(token).getToken()==null)
            throw new IllegalArgumentException( "user not Authorize to LoggedOut our account.");

//        UserSession userSession=userSessionDao.findByToken(token); // reverse karna
//        if (userSession.getToken() ==null||userSession.getSignouttime()!=null)
//            throw new IllegalArgumentException( "user not Authorize to LoggedOut our account.");

              userSessionService.UserLogout(token);
              return;
    }


}
