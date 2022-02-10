package in.ongrid.quizPortal.dao;

public class BaseResponce<T> extends BaseErrorResponse {
    private T data;
    public BaseResponce(int code, String message) {
        super(code, message);

    }

    public BaseResponce(int code, String message, T data) {
        super(code, message);
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
