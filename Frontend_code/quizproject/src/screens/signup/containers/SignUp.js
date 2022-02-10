import React, { Component } from "react";
import { SignUpComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
class SignUpContainer extends Component {
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
handleForm = () => {
 
  const options = {
    headers: {'Headers': 'value'}
  };
  axios.post(`${base_url}/user`,this.state.data,options)
  .then((response) => {
   
  
    console.log(response);

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
      <SignUpComponent
        data={this.state.data}
        handleChange={this.handleChange}
        handleForm={this.handleForm}
      />
    );
  }
}

export default SignUpContainer;
