package in.ongrid.quizPortal.service.impl;
import in.ongrid.quizPortal.GenerateToken.TokenGenerate;
import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.service.UserSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Date;

@Service
public class UserSessionServiceImpl implements UserSessionService {

        @Autowired
         UserSessionDao userSessionDao;


    // function for Create Token
    @Override
    public UserSession CreateToken(User user) {
                // Generate Token
                TokenGenerate token=new TokenGenerate();
                UserSession userSession=new UserSession();
                String  Token=token.GenerateString();

                userSession.setToken(Token);
                userSession.setSignintime(new Date());
                userSession.setUser(user);

        return userSessionDao.save(userSession);
    }
    // User logout account
    @Override
    public void UserLogout(String token) {

        UserSession userSession=userSessionDao.findByToken(token);
        if (userSession.getToken() !=null&&userSession.getSignouttime()==null) {
            if (userSession.getSignouttime() != null) throw new IllegalArgumentException("User already logout");
            userSession.setSignouttime(new Date());
                userSessionDao.save(userSession);

        }
        throw new IllegalArgumentException( "user not Authorized to Logged Out our account.");
    }

}
