/*
component state
Initialization - > Updattion -> Unmount

state is obj literal
this.state can be set in class constructor
bind is used so that it does not get executed rightaway
view -> model data binding onChange
model ->view  data binding value
nested object literal
props can be used to pass data from parent to child
*/

import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';
import {setLocalStorage} from './Services';
import Config from './config/webConfig.json';
import CountryContext from './Context';

class SignIn extends Component {

    constructor(props){
        super(props);
        this.formFields = [
            {type:'text', key:'user_email'},
            {type:'text', key:'user_password'},
            // {type:'text', key:'user_type'},
            // {type:'email', key:'email'},
            // {type:'password', key:'pass'}
        ];
        // this.state = {
        //     fName : '', lName:'', email :'', pass:'',
          
        // }
        
        this.state = {success: false, error:false, progress:false};
        console.log("[Sign In.js] inside constructor ....");
    }

    componentWillMount(){
        console.log("[Sign In.js] component will mount");
    }


    componentDidMount(){
        console.log("[Sign In.js] component did mount");
    }

    takeAction(obj){
        obj.user_type = 'client';
        console.log(obj);


        let self=this;
        self.setState({progress : true});
        axios.post('https://betaapi.getsetgo.fitness/base_ind/API/v1/sign-in', obj)
          .then(function (response) {
            console.log(response);
            //localStorage.setItem("userToken",response.data.token);
            setLocalStorage("userToken", response.data.token)
            self.setState({progress:false, success:true})
          })
          .catch(function (error) {
            console.log(error);
            self.setState({progress:false, error:true, success:false})
          });
        //this.setState({});
    }

  render() {

    console.log("[Sign In.js] render executed ...");
    let {success, error, progress} = this.state;
    let {SignIn} = Config
    return (
<div>
       <div className="signUp">
       <CountryContext.Consumer >
           {config=><h1>bHola! {config.country}</h1>}
       </CountryContext.Consumer>
       <h1>{SignIn.header}</h1>
      { !(success && error && progress) && <ul className="formContainer">
            {/* {this.renderForm()} */}
            <Form formFields={this.formFields}  submitAction = {this.takeAction} that ={this} />
            
            {/* <li><input type="submit" placeholder="Submit" onClick={(e) =>{
                this.takeAction()
            }}></input></li> */}
      </ul>}
      {
          success && !(error || progress) &&
          <div>{SignIn.success}. </div>
      }
      {
          progress && !(success && progress) &&
          <div>{SignIn.progress} </div>
      }
      {
          success && !(error || progress) &&
          <div>{SignIn.error}. </div>
      }
      {
          success && !(error || progress) &&
          <div>Well you are on Way to login. </div>
      }
      
    </div> 

</div>
    );
  }
}

export default SignIn;
