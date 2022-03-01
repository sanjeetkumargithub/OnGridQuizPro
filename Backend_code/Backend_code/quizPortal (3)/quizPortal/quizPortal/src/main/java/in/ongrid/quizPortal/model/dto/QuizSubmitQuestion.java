package in.ongrid.quizPortal.model.dto;

public class QuizSubmitQuestion {
    private Integer id;
    private Boolean answer;

    public QuizSubmitQuestion(Integer id, Boolean answer) {
        this.id = id;
        this.answer = answer;
    }

    public QuizSubmitQuestion() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getAnswer() {
        return answer;
    }

    public void setAnswer(Boolean answer) {
        this.answer = answer;
    }
}
