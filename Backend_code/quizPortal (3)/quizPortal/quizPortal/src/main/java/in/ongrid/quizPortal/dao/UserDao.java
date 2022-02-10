package in.ongrid.quizPortal.dao;

import in.ongrid.quizPortal.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {
    User findByMobile(String mobile);
    User findByEmail(String email);


}
