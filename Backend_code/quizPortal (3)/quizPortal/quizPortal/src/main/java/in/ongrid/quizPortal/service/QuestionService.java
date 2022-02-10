package in.ongrid.quizPortal.service;
import in.ongrid.quizPortal.entities.Question;
import in.ongrid.quizPortal.model.dto.CreateQuestionRequest;
import in.ongrid.quizPortal.model.dto.QuizScore;

import java.util.List;

public interface QuestionService {

 void createQuestion(CreateQuestionRequest request, int quizId);

    List<Question> getQuestion(int quizId ,String token);

   QuizScore submitQuiz(List<CreateQuestionRequest> request , String token);
}
