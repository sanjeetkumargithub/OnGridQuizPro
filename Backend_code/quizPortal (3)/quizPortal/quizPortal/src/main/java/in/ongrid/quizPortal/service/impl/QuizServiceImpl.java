package in.ongrid.quizPortal.service.impl;

import in.ongrid.quizPortal.dao.QuizDao;
import in.ongrid.quizPortal.dao.UserSessionDao;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.entities.UserSession;
import in.ongrid.quizPortal.model.dto.CreateQuizRequest;
import in.ongrid.quizPortal.service.QuizService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {
    @Autowired
    QuizDao quizDao;
    @Autowired
    UserSessionDao userSessionDao;

    @Override
    public Quiz createQuiz(String token, CreateQuizRequest request) {
        UserSession userSession = userSessionDao.findByToken(token);

        if (userSession == null || userSession.getToken() == null || userSession.getSignOutTime() != null)
            throw new IllegalArgumentException("You are not authorized to create quiz.");

        if (request == null || StringUtils.isBlank(request.getTitle()))
            throw new IllegalArgumentException("request  cannot be null or empty .");

        Quiz quiz = new Quiz();
        quiz.setTitle(request.getTitle());
        return quizDao.save(quiz);
    }

    @Override
    public List<Quiz> getQuiz() {
        return quizDao.findAll();

    }


}
