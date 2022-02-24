package in.ongrid.quizPortal.controller;

import in.ongrid.quizPortal.dao.BaseResponse;
import in.ongrid.quizPortal.entities.Question;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.model.dto.CreateQuestionRequest;
import in.ongrid.quizPortal.model.dto.CreateQuizRequest;
import in.ongrid.quizPortal.model.dto.QuizSubmitResponse;
import in.ongrid.quizPortal.model.dto.QuizSubmitRequest;
import in.ongrid.quizPortal.service.QuestionService;
import in.ongrid.quizPortal.service.QuizService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.AccessDeniedException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/quiz")
public class QuizController {

    @Autowired
    QuizService quizService;
    @Autowired
     QuestionService questionService;

    @PostMapping(path = "/")
    public BaseResponse<Quiz> createQuiz(@RequestHeader("Authorization") String token, @RequestBody CreateQuizRequest request){
        if(StringUtils.isBlank(token))  throw new AccessDeniedException("Invalid token.");
        Quiz quiz= quizService.createQuiz(token,request);
        return  new BaseResponse<>(HttpStatus.OK.value(), "Success",quiz);
    }


    @GetMapping(path = "/")
    public List<Quiz> getQuiz(){
        return quizService.getQuiz();
    }


    @PostMapping(path = "/{quizId}/question")
    public BaseResponse<String> createQuestion(@RequestHeader("Authorization") String token, @RequestBody CreateQuestionRequest request, @PathVariable("quizId") Integer quizId){
        if(StringUtils.isBlank(token))  throw new AccessDeniedException("Invalid token.");
             questionService.createQuestion(token,request,quizId);
        return  new BaseResponse<>(HttpStatus.OK.value(), "Success","successfully Question create.");
    }

    @GetMapping(path = "/{quizId}/questions")
    public BaseResponse<List<Question>> getQuestion(@PathVariable("quizId") Integer quizId, @RequestHeader("Authorization") String token){
            if(StringUtils.isBlank(token))  throw new AccessDeniedException("Invalid token.");
             List<Question> question= questionService.getQuestion(quizId ,token);
            return  new BaseResponse<>(HttpStatus.OK.value(), "Success" , question);
    }

    @PostMapping(path = "/{quizId}/submit")
    public BaseResponse<QuizSubmitResponse> submitQuizQuestions(@PathVariable("quizId") Integer quizId, @RequestBody QuizSubmitRequest request, @RequestHeader("Authorization") String token) {
        if (StringUtils.isBlank(token)) throw new AccessDeniedException("Invalid token.");
        QuizSubmitResponse response = questionService.submitQuizQuestions(request ,token,quizId);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", response);
    }
}
