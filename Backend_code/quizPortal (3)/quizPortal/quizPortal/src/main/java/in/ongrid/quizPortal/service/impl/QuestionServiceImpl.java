package in.ongrid.quizPortal.service.impl;

import in.ongrid.quizPortal.dao.QuestionDao;
import in.ongrid.quizPortal.dao.QuizDao;
import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.Question;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.model.dto.CreateQuestionRequest;
import in.ongrid.quizPortal.model.dto.QuizScore;
import in.ongrid.quizPortal.service.QuestionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl   implements QuestionService {
    @Autowired
     QuestionDao questionDao;
    @Autowired
     QuizDao quizDao;
    @Autowired
    UserSessionDao userSessionDao;

    // Create Question
    @Override
    public void createQuestion(CreateQuestionRequest request, int quizId) {

                if(StringUtils.isBlank(request.getTitle())) throw new IllegalArgumentException("Question Titile connot be null.");
                if(request.getAnswer()==null) throw new IllegalArgumentException("Answer connot be null.");
                Question question=new Question();
                question.setTitle(request.getTitle());
                question.setAnswer(request.getAnswer());
                Quiz quiz=quizDao.getById(quizId);
                question.setQuiz(quiz);
                 questionDao.save(question);
                 return ;
    }
    // Get All question of one quiz
    @Override
    public List<Question> getQuestion(int quizId ,String token) {
        UserSession userSession=userSessionDao.findByToken(token);
                if (userSession.getToken() !=null&&userSession.getSignouttime()==null) {
                    return questionDao.findAllByQuizId(quizId);
                }

                throw new IllegalArgumentException( "user not Authorize to view Question.");
    }

    // User submit our quiz
    @Override
    public QuizScore submitQuiz(List<CreateQuestionRequest> request ,String token) {
        UserSession userSession=userSessionDao.findByToken(token);
        if (userSession.getToken() !=null&&userSession.getSignouttime()==null) {
         int countRight=0,countWrong=0;

            for (CreateQuestionRequest listOfAnswer:request){
                int id=listOfAnswer.getId();
                boolean ans= listOfAnswer.getAnswer();
                Question question=questionDao.getById(id);
                if(question.getAnswer().equals(ans)){
                    countRight++;
                }
                else countWrong++;
            }

                 QuizScore quizScore=new QuizScore();
                quizScore.setMarks(countRight);
                quizScore.setCurrectQuestion(countRight);
                quizScore.setInCurrectQuestion(countWrong);


                 return quizScore;
        }

                 throw new IllegalArgumentException( "user not Authorize to submit the quiz.");
    }

}
