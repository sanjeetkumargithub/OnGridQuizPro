package in.ongrid.quizPortal.dao;

public class BaseErrorResponse {
            private  Integer code;
            private  String message;

    public BaseErrorResponse(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public BaseErrorResponse() {
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
