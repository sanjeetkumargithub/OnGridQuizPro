package in.ongrid.quizPortal.dao;

import in.ongrid.quizPortal.entities.UserSession;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserSessionDao extends JpaRepository<UserSession,Integer> {
    UserSession findByToken(String token);
}
