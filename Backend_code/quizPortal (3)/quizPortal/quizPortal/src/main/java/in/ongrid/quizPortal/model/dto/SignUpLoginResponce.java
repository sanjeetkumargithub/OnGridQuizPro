package in.ongrid.quizPortal.model.dto;

public class SignUpLoginResponce {

    private  String name;
    private  String token;

    public SignUpLoginResponce(String name, String token) {
        this.name = name;
        this.token = token;
    }

    public SignUpLoginResponce() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
