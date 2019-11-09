import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Login from './login/login';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
            <Login/>
            </React.Fragment>
        )
    }
}

export default Home;