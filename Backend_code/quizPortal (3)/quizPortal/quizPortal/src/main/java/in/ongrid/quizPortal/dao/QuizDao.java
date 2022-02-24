package in.ongrid.quizPortal.dao;

import in.ongrid.quizPortal.entities.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizDao  extends JpaRepository<Quiz,Integer> {

}
