package in.ongrid.quizPortal.dao;
import in.ongrid.quizPortal.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionDao extends JpaRepository<Question,Integer> {
    List<Question> findAllByQuizId(int quizid);
}
