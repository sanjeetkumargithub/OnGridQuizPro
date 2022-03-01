package in.ongrid.quizPortal.service;
import in.ongrid.quizPortal.entities.Question;
import in.ongrid.quizPortal.model.dto.CreateQuestionRequest;
import in.ongrid.quizPortal.model.dto.QuizSubmitResponse;
import in.ongrid.quizPortal.model.dto.QuizSubmitRequest;

import java.util.List;

public interface QuestionService {

 void createQuestion(String token,CreateQuestionRequest request, Integer quizId);

    List<Question> getQuestion(Integer quizId ,String token);


    QuizSubmitResponse submitQuizQuestions(QuizSubmitRequest request, String token, Integer quizId);
}
