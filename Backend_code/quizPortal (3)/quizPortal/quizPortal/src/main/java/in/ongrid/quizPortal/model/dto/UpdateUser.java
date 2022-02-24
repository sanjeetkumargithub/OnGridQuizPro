package in.ongrid.quizPortal.model.dto;

import in.ongrid.quizPortal.model.Gender;

import java.util.Date;

public class UpdateUser {

    private  String name;
    private  String mobile;
    private  Gender gender;
    private Date dateOfBirth;

    public UpdateUser(String name, String mobile, Gender gender, Date dateOfBirth) {
        this.name = name;
        this.mobile = mobile;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    }

    public UpdateUser() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
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
