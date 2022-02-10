package in.ongrid.quizPortal.service;

import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.entities.UserSession;

public interface UserSessionService {

      UserSession  CreateToken(User user);

      void UserLogout(String token);
}
