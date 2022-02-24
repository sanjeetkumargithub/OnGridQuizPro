package in.ongrid.quizPortal.model.dto;

public class QuizSubmitResponse {
    private Integer rightQuestions;
    private Integer wrongQuestions;
    private Integer totalQuestions;

    public QuizSubmitResponse(Integer rightQuestions, Integer wrongQuestions, Integer totalQuestions) {
        this.rightQuestions = rightQuestions;
        this.wrongQuestions = wrongQuestions;
        this.totalQuestions = totalQuestions;
    }

    public QuizSubmitResponse() {
    }

    public Integer getRightQuestions() {
        return rightQuestions;
    }

    public void setRightQuestions(Integer rightQuestions) {
        this.rightQuestions = rightQuestions;
    }

    public Integer getWrongQuestions() {
        return wrongQuestions;
    }

    public void setWrongQuestions(Integer wrongQuestions) {
        this.wrongQuestions = wrongQuestions;
    }

    public Integer getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }
}

