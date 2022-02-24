package in.ongrid.quizPortal.service;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.model.dto.CreateQuizRequest;

import java.util.List;

public interface QuizService {
    Quiz createQuiz( String token,CreateQuizRequest request);

    List<Quiz> getQuiz();


}
