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

Updation 
componentwillUpdate(nextProps)
componentWillDidUpdate
Render
RenderChildComponent
CoponentDidUpdate
*/

import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';
import CountryContext from './Context';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.formFields = [
            {type:'text', key:'firstname'},
            {type:'text', key:'lastname'},
            {type:'email', key:'email'},
            {type:'password', key:'password'}
        ];
        // this.state = {
        //     fName : '', lName:'', email :'', pass:'',
          
        // }
        this.state = {success: false, error:false, progress:false};
        console.log("[SignUp.js] inside constructor ....");
        this.refInp = React.createRef()
        console.log("[SignUp.js]  load props .... ",this.props);

    }

    componentWillMount(){
        console.log("[SignUp.js] component will mount ....");
    }

    componentDidMount(){
        console.log("[SignUp.js] component did mount ....");
    }

    takeAction(obj){
        console.log(obj);
        console.log("-----------");
        let self=this;
        self.setState({progress : true});
        axios.post('https://betaapi.getsetgo.fitness/base_ind/API/v1/signup', obj)
          .then(function (response) {
            console.log(response);
            self.setState({progress:false, success:true})
          })
          .catch(function (error) {
            console.log(error);
            self.setState({progress:false, error:true, success:false})
          });

        self.setState({});
    }

  render() {
    console.log("[SignUp.js] render executed ....");
        let {success, error, progress} = this.state;
    return (
<div>
       <div className="signUp">
       <CountryContext.Consumer>
           {val=> <h1>{val.country}</h1>}
       </CountryContext.Consumer>
       <h1>SIgn Up</h1>
      {!(success && error && progress) && <ul className="formContainer">
            {/* {this.renderForm()} */}
            <Form formFields={this.formFields}  submitAction = {this.takeAction} that ={this} />
            
            {/* <li><input type="submit" placeholder="Submit" onClick={(e) =>{
                this.takeAction()
            }}></input></li> */}
      </ul>}
      {
          success && !(error || progress) &&
          <div>Well you are on Way to login. </div>
      }
      {
          progress && !(success || progress) &&
          <div>Hold on while we register. </div>
      }
      {
          success && !(error || progress) &&
          <div>Well you are on Way to login. </div>
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

export default SignUp;
