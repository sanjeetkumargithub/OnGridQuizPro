package in.ongrid.quizPortal.controller;

import in.ongrid.quizPortal.dao.BaseResponce;
import in.ongrid.quizPortal.model.dto.CreateUserRequest;
import in.ongrid.quizPortal.model.dto.SignUpLoginResponce;
import in.ongrid.quizPortal.model.dto.UpdateUser;
import in.ongrid.quizPortal.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
 UserService userService;

    // User create account
    @PostMapping
    public  BaseResponce<SignUpLoginResponce> createUser(@RequestBody CreateUserRequest request )  {
        SignUpLoginResponce user=userService.createUser(request);
        return  new BaseResponce<>(HttpStatus.OK.value(), "Success" , user);
            }

    // Update user account
     @PostMapping(path= "/update")
         public BaseResponce<UpdateUser> updateUser(@RequestBody UpdateUser request, @RequestHeader("Authorization") String token)  {
            if(StringUtils.isBlank(token))  throw new IllegalArgumentException("User  not authorized to update account.");
                    UpdateUser user=  userService.updateUser(token,request);
                    return  new BaseResponce<>(HttpStatus.OK.value(), "Success" , user);
         }

    // user Login account
    @PostMapping(path="/login")
    public BaseResponce<SignUpLoginResponce> userLogin(@RequestBody CreateUserRequest request)  {
        SignUpLoginResponce user= userService.userLogin(request);
        return  new BaseResponce<>(HttpStatus.OK.value(), "Success" , user);
    }

    // user logout
    @PostMapping(path = "/logout")
    public  BaseResponce< String> UserLogout( @RequestHeader("Authorization") String token){
        if(StringUtils.isBlank(token))  throw new IllegalArgumentException("User not Authorized to Logged out.");
            userService.UserLogout(token);
            return  new BaseResponce<>(HttpStatus.OK.value(), "Success","User successfully logout." );

        }



}
