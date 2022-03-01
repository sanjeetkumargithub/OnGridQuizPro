package in.ongrid.quizPortal.advice;

import in.ongrid.quizPortal.dao.BaseErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;

@RestControllerAdvice
public class ExceptionHandlerAdvice {

    @ExceptionHandler(value = IllegalArgumentException.class)
    public ResponseEntity<BaseErrorResponse> illegalErrorHandler(Exception e) {
        BaseErrorResponse ob = new BaseErrorResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ob);
    }

    @ExceptionHandler(value = AccessDeniedException.class)
    ResponseEntity<BaseErrorResponse> accessDeniedErrorHandler(Exception e) {
        BaseErrorResponse ob = new BaseErrorResponse(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ob);
    }

}
