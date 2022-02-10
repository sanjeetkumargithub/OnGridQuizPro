package in.ongrid.quizPortal.entities;

import javax.persistence.*;

@Entity
@Table(name = "quiz")
public class Quiz extends BaseTime {


    @Id
    @GeneratedValue
    private int id;
        @Column(length = 50,nullable = false)
    private String title;


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

}