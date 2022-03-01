package in.ongrid.quizPortal.service;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.model.dto.CreateQuizRequest;
import org.springframework.data.domain.Page;


public interface QuizService {
    Quiz createQuiz( String token,CreateQuizRequest request);



    Page<Quiz> getQuizzes(Integer page);
}
