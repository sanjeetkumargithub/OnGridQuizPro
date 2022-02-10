package in.ongrid.quizPortal.service.impl;
import in.ongrid.quizPortal.dao.QuizDao;
import in.ongrid.quizPortal.entities.Quiz;
import in.ongrid.quizPortal.model.dto.CreateQuizRequest;
import in.ongrid.quizPortal.service.QuizService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuizServiceImpl  implements QuizService {
        @Autowired
         QuizDao quizDao;

        // Create Quiz
        @Override
        public Quiz createQuiz(CreateQuizRequest quiz) {
                if(StringUtils.isBlank(quiz.getTitle())) throw new IllegalArgumentException("Quiz title cannot be null.");
                Quiz newQuiz=new Quiz();
                newQuiz.setTitle(quiz.getTitle());
                LocalDateTime dt=LocalDateTime.now();

               return quizDao.save(newQuiz);
        }

    //  Get All quizzes
        @Override
        public List<Quiz> getQuiz() {
            return quizDao.findAll();

        }




}
