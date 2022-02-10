package in.ongrid.quizPortal.entities;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "usersession")
public class UserSession {


    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String token;
    private Date signintime;
    private Date signouttime;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getSignintime() {
        return signintime;
    }

    public void setSignintime(Date signintime) {
        this.signintime = signintime;
    }

    public Date getSignouttime() {
        return signouttime;
    }

    public void setSignouttime(Date signouttime) {
        this.signouttime = signouttime;
    }
}
