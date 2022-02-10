package in.ongrid.quizPortal.model.dto;

public class QuizScore {


    private  int marks;
    private  int currectQuestion;
    private  int inCurrectQuestion;

    public QuizScore(int marks, int currectQuestion, int inCurrectQuestion) {
        this.marks = marks;
        this.currectQuestion = currectQuestion;
        this.inCurrectQuestion = inCurrectQuestion;
    }

    public QuizScore() {
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public int getCurrectQuestion() {
        return currectQuestion;
    }

    public void setCurrectQuestion(int currectQuestion) {
        this.currectQuestion = currectQuestion;
    }

    public int getInCurrectQuestion() {
        return inCurrectQuestion;
    }

    public void setInCurrectQuestion(int inCurrectQuestion) {
        this.inCurrectQuestion = inCurrectQuestion;
    }
}

