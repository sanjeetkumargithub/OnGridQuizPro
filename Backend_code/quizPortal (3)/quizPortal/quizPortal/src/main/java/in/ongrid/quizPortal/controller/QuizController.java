package in.ongrid.quizPortal.controller;

import in.ongrid.quizPortal.dao.BaseResponce;
import in.ongrid.quizPortal.entities.Question;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.model.dto.CreateQuestionRequest;
import in.ongrid.quizPortal.model.dto.CreateQuizRequest;
import in.ongrid.quizPortal.model.dto.QuizScore;
import in.ongrid.quizPortal.service.QuestionService;
import in.ongrid.quizPortal.service.QuizService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/quiz")
public class QuizController {

    @Autowired
    QuizService quizService;
    @Autowired
     QuestionService questionService;

    // create quiz
    @PostMapping
    public Quiz createQuiz(@RequestBody CreateQuizRequest quiz){
        return quizService.createQuiz(quiz);
    }

    // Get all quizzes
    @GetMapping
    public List<Quiz> getQuiz(){
        return quizService.getQuiz();
    }


    // Create Question
    @PostMapping(path = "/{quizId}/question")
    public void createQuestion(@RequestBody CreateQuestionRequest request, @PathVariable("quizId") int quizId){
             questionService.createQuestion(request,quizId);
    }

    // Get All question of one quiz
    @GetMapping(path = "/{quizId}/question")
    public BaseResponce<List<Question>> getQuestion(@PathVariable("quizId") int quizId,  @RequestHeader("Authorization") String token){
            if(StringUtils.isBlank(token))  throw new IllegalArgumentException("User not Authorized to view this quiz  Question.");
             List<Question> question= questionService.getQuestion(quizId ,token);
            return  new BaseResponce<>(HttpStatus.OK.value(), "Success" , question);
    }

    // User submit Quiz
    @PostMapping(path = "/submit")
    public BaseResponce<QuizScore> submitQuiz(@RequestBody  List<CreateQuestionRequest > list, @RequestHeader("Authorization") String token) {
        if (StringUtils.isBlank(token)) throw new IllegalArgumentException("User not Authorized to submit the quiz.");
        QuizScore score = questionService.submitQuiz((List<CreateQuestionRequest>) list ,token);
        return new BaseResponce<>(HttpStatus.OK.value(), "Success", score);
    }
}
