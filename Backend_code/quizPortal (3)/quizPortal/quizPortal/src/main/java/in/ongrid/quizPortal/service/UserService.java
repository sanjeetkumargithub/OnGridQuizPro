package in.ongrid.quizPortal.service;

import in.ongrid.quizPortal.entities.User;
import in.ongrid.quizPortal.model.dto.*;

public interface UserService {

    LoginResponse Login(LoginRequest request);

    void Logout(String token);

    User getProfile(String token);

    SignUpUserResponse signUp(SignUpUserRequest request);

    UpdateUser updateProfile(String token, UpdateUser request);
}
