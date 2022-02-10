import React, { Component } from "react";
import { LoginComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import { useHistory } from "react-router-dom";
class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  
  handleChange = (value, key) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };
//


//
handleForm = () => {
  //response: "{\"code\":200,\"message\":\"Success\",\"data\":{\"name\":\"sanjet\",\"token\
  //const history = useHistory();
  const options = {
    headers: {'Headers': 'value'}
  };
  axios.post(`${base_url}/user/login`,this.state.data,options)
  .then((response) => {
   
   // history.push("/home");
    console.log(response);
    //localStorage.setItem('token', value)
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
    console.log("error");
  });
 
  }
//



  render() {
    console.log(this.state.data);
    return (
      <LoginComponent 
      data={this.state.data}
      handleChange={this.handleChange}
      handleForm={this.handleForm}
      />
    );
  }
}

export default LoginContainer;
