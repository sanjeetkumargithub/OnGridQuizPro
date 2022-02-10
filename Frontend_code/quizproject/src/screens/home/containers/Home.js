import axios from 'axios';
import React, { Component } from 'react'
import { HomeComponent } from '../components';
import base_url from "../../../utils/api";
//import React from "react";
// import axios from "axios";
class HomeContainer extends Component {

    constructor(props) {
        super(props)
    }

   // const [post, setPost] = React.useState();

    // React.useEffect(() => {
    //     axios.get(`${baseURL}/quiz`).then((response) => {
    //       setPost(response.data);
    //     });
    //   }, []);


    // if (!post) return null;

    render() {
        return (
            <HomeComponent />
        )

    }
}

export default HomeContainer