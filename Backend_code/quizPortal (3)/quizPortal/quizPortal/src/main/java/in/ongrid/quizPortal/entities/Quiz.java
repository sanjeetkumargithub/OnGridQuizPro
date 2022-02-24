package in.ongrid.quizPortal.entities;

import javax.persistence.*;

@Entity
@Table(name = "quiz")
public class Quiz extends BaseTime {


    @Id
    @GeneratedValue
    private Integer id;
        @Column(length = 50,nullable = false)
    private String title;


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

}