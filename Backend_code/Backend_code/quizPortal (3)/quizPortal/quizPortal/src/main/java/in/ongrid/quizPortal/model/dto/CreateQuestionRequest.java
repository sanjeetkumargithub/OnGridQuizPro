package in.ongrid.quizPortal.model.dto;

public class CreateQuestionRequest {
    private Integer id;
    private String title;
    private Boolean answer;

    public CreateQuestionRequest(Integer id, String title, Boolean answer) {
        this.id = id;
        this.title = title;
        this.answer = answer;
    }

    public CreateQuestionRequest() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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
