package in.ongrid.quizPortal.model.dto;
import java.util.List;

public class QuizSubmitRequest {

    private List<QuizSubmitQuestion> submitQuestions;

    public QuizSubmitRequest(List<QuizSubmitQuestion> submitQuestions) {
        this.submitQuestions = submitQuestions;
    }

    public QuizSubmitRequest() {
    }

    public List<QuizSubmitQuestion> getSubmitQuestions() {
        return submitQuestions;
    }

    public void setSubmitQuestions(List<QuizSubmitQuestion> submitQuestions) {
        this.submitQuestions = submitQuestions;
    }
}
