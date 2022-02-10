package in.ongrid.quizPortal.model.dto;

public class CreateQuestionRequest {
    private int id;
    private String title;
    private Boolean answer;

    public CreateQuestionRequest(int id, String title, Boolean answer) {
        this.id = id;
        this.title = title;
        this.answer = answer;
    }

    public CreateQuestionRequest() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getAnswer() {
        return answer;
    }

    public void setAnswer(Boolean answer) {
        this.answer = answer;
    }
}
