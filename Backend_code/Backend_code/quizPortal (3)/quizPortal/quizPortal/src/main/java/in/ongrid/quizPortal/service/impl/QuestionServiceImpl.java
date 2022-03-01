package in.ongrid.quizPortal.service.impl;

import in.ongrid.quizPortal.dao.QuestionDao;
import in.ongrid.quizPortal.dao.QuizDao;
import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.Question;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.model.dto.CreateQuestionRequest;
import in.ongrid.quizPortal.model.dto.QuizSubmitQuestion;
import in.ongrid.quizPortal.model.dto.QuizSubmitRequest;
import in.ongrid.quizPortal.model.dto.QuizSubmitResponse;
import in.ongrid.quizPortal.service.QuestionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    QuestionDao questionDao;
    @Autowired
    QuizDao quizDao;
    @Autowired
    UserSessionDao userSessionDao;

    @Override
    public void createQuestion(String token, CreateQuestionRequest request, Integer quizId) {

        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null || userSession.getSignOutTime() != null)
            throw new IllegalArgumentException("You are not authorized to create question.");

        if (request == null || StringUtils.isBlank(request.getTitle()) || request.getAnswer() == null)
            throw new IllegalArgumentException("Request  cannot be  null.");

       // Quiz quiz = quizDao.getById(quizId);
        Quiz quiz=quizDao.findById(quizId).orElse(null);
        if (quiz==null ) throw new IllegalArgumentException("Quiz id not exist.");

        Question question = new Question();
        question.setTitle(request.getTitle());
        question.setAnswer(request.getAnswer());

        question.setQuiz(quiz);
        questionDao.save(question);
    }

    @Override
    public List<Question> getQuestion(Integer quizId, String token) {

        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null || userSession.getSignOutTime() != null)
            throw new IllegalArgumentException("You are not authorized to get questions.");

        return questionDao.findAllByQuizId(quizId);

    }

    @Override
    public QuizSubmitResponse submitQuizQuestions(QuizSubmitRequest request, String token, Integer quizId) {

        if (request == null || request.getSubmitQuestions() == null)
            throw new IllegalArgumentException("Request cannot be null.");

        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null || userSession.getSignOutTime() != null)
            throw new IllegalArgumentException("You are not authorized to submit questions.");

        Integer RightQuestions = 0, WrongQuestions = 0;

        List<Question> QuestionList = questionDao.findAllByQuizId(quizId);

        if (QuestionList == null) throw new IllegalArgumentException("Questions does not exist.");

        Map<Integer, Boolean> map = new HashMap<>();

        for (Question question : QuestionList) {

            if (question.getId() == null || question.getAnswer() == null)
                throw new IllegalArgumentException("Id or answer  cannot be  null.");

            map.put(question.getId(), question.getAnswer());
        }
        for (QuizSubmitQuestion submitQuizQuestions : request.getSubmitQuestions()) {

            if (submitQuizQuestions.getId() == null || submitQuizQuestions.getAnswer() == null)
                throw new IllegalArgumentException("Id or answer  cannot be  null.");

            if (map.get(submitQuizQuestions.getId()) == submitQuizQuestions.getAnswer()) RightQuestions++;
            else WrongQuestions++;
        }

        QuizSubmitResponse quizSubmitResponse = new QuizSubmitResponse();
        quizSubmitResponse.setRightQuestions(RightQuestions);
        quizSubmitResponse.setWrongQuestions(WrongQuestions);
        quizSubmitResponse.setTotalQuestions(QuestionList.size());
        return quizSubmitResponse;
    }

}
