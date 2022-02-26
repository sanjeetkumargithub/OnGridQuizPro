package in.ongrid.quizPortal.dao;

import in.ongrid.quizPortal.entities.Quiz;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface QuizDao  extends JpaRepository<Quiz,Integer> {
         Page<Quiz> findAll(Pageable perPageable);

}
