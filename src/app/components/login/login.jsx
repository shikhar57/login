import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import APITransport from "../../actions/apitransport/apitransport";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Input from '../common/input/input';
import Button from '../common/button/button';
import _ from 'lodash';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputElements : [
                {
                    id:'uname',
                    name:'uname',
                    handleChange:this.handleUnameChange,
                    type:"text"
                },
                {
                    id:'pwd',
                    name:'pwd',
                    handleChange:this.handlePwdChange,
                    type:"password"
                }
            ],
            username : '',
            password : ''

        }
    }

    handleUnameChange =(username)=>{
        this.setState({
            username : username
        })
    }

    handlePwdChange =(password)=>{
        this.setState({
            password : password
        })
    }
    checkValidation =()=>{
        let flag = 0;
        let regex = new RegExp("[A-Za-z0-9]");
                    if(!regex.test(this.state.username)){
                       alert('Username can have only letter and digits');
                       flag++;
                    }
        if(this.state.username.length < 8 && flag == 0){
            alert('Username should be atleast 8 characters long');
            flag++;
        }
        return flag;
    }

    handleSubmit=async()=>{
        let flagVal = await this.checkValidation();
        if(flagVal <=0 )
        if(this.props.loginResults.username === this.state.username && this.props.loginResults.password === this.state.password){
           this.props.history.push(`/dashboard`);
        }else{
            alert('Incorrect Username or Password.Please try again');
        }
    }


    render() {
        const {inputElements} = this.state;
        return (
            <React.Fragment>
                {
                    _.map(inputElements,(element, key)=>{
                        return <Input name={element.name} id={element.id} type={element.type} key={key} updateData={element.handleChange} />
                    })
                }
                <Button name={"submit"} onSubmit={this.handleSubmit}/>

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        apistatus: state.apistatus,
        loginResults:state.loginResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        APITransport: APITransport
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))