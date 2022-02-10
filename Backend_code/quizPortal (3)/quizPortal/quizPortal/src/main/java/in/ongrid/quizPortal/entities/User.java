package in.ongrid.quizPortal.entities;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import in.ongrid.quizPortal.model.Gender;
import net.minidev.json.annotate.JsonIgnore;
import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Date;
@Entity
@Table(name = "user")

public class User extends BaseTime {

    @Id
    @GeneratedValue
    private int id;

    @Column(length = 50 ,nullable = false)
    private String name;
    @Column(  length = 50, unique = true ,nullable = false )

    private String email;
    @Column(length = 10, unique = true,nullable = false)
    private String mobile;
    @Column(nullable = false)
    private String password;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private Date dateOfBirth;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

}