package in.ongrid.quizPortal.controller;
import in.ongrid.quizPortal.dao.BaseResponse;
import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.model.dto.*;
import in.ongrid.quizPortal.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.AccessDeniedException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(path = "/")
    public BaseResponse<SignUpUserResponse> signUp(@RequestBody SignUpUserRequest request) {
        SignUpUserResponse signUpResponse = userService.signUp(request);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", signUpResponse);
    }


    @GetMapping(path = "/")
    public BaseResponse<User> getProfile(@RequestHeader("Authorization") String token) {
        if (StringUtils.isBlank(token)) throw new AccessDeniedException("Invalid token.");
        User user = userService.getProfile(token);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", user);
    }


    @PostMapping(path = "/update")
    public BaseResponse<UpdateUser> updateProfile(@RequestBody UpdateUser request, @RequestHeader("Authorization") String token) {
        if (StringUtils.isBlank(token)) throw new AccessDeniedException("Invalid token.");
        UpdateUser updateProfileResponse = userService.updateProfile(token, request);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", updateProfileResponse);
    }


    @PostMapping(path = "/login")
    public BaseResponse<LoginResponse> Login(@RequestBody LoginRequest request) {
        LoginResponse user = userService.Login(request);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success", user);
    }

    @PostMapping(path = "/logout")
    public BaseResponse<Void> Logout(@RequestHeader("Authorization") String token) {
        if (StringUtils.isBlank(token)) throw new AccessDeniedException("Invalid token.");
        userService.Logout(token);
        return new BaseResponse<>(HttpStatus.OK.value(), "Success");

    }


}
