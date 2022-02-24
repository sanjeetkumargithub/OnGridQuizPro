package in.ongrid.quizPortal.service.impl;

import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.service.UserSessionService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserSessionServiceImpl implements UserSessionService {

    @Autowired
    UserSessionDao userSessionDao;

    @Override
    public UserSession CreateToken(User user) {

        if (user == null) throw new IllegalArgumentException("user is not exist.");
        UserSession userSession = new UserSession();
        String Token = RandomStringUtils.randomAlphanumeric(100).toUpperCase();

        userSession.setToken(Token);
        userSession.setSignInTime(new Date());

        userSession.setUser(user);

        return userSessionDao.save(userSession);
    }


}
