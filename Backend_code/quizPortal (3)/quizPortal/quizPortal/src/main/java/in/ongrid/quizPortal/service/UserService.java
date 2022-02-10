package in.ongrid.quizPortal.service;

import in.ongrid.quizPortal.model.dto.CreateUserRequest;
import in.ongrid.quizPortal.model.dto.SignUpLoginResponce;
import in.ongrid.quizPortal.model.dto.UpdateUser;

public interface UserService {



    SignUpLoginResponce createUser(CreateUserRequest request) ;

    UpdateUser updateUser(String token, UpdateUser request) ;

    SignUpLoginResponce userLogin(CreateUserRequest request);

    void UserLogout(String token);
}
