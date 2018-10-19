/*
component state
Initialization - > Updattion -> Unmount

state is obj literal
this.state can be set in class constructor
bind is used so that it does not get executed rightaway
view -> model data binding onChange
model ->view  data binding value
nested object literal
props bring data from parent to child
WINDOW.LOCATION.HREF
*/

import React, { Component } from 'react';
import './App.css';

class Form extends Component {

    constructor(props){
        super(props);
        
        this.formFields = this.props.formFields;
        // this.state = {
        //     fName : '', lName:'', email :'', pass:'',
          
        // }

        this.state = {}
    }

    componentWillMount(){
        console.log("this.props.formField", this.props.formFields)
        // for (let k in this.props.formFields){
        //     this.setState({[k] :''})
        // }

        for (let i=0; this.props.formFields[i]; i++){
            let key = this.props.formFields[i]['key'];
            this.setState({[key]:''});
        }
    }

    changeAction(val){
        
        this.setState({action:val});
    }
  
    changeImp(e, key){
        //this.setState({fName:e.target.value})

        // let tempObj = {};
        // for (let k in this.state[key]){
        //     tempObj[k] = this.state[key][k];
        // }
        // tempObj[subKey] = e.target.value;

        this.setState({
            [key]: e.target.value
        });
        console.log(this.state);
    }

    takeAction(){
        console.log(this.state);
    }

    renderForm(){
        let self = this;

        return(
            this.formFields.map(
                function(el, indx){
                    return self.renderEl(el,indx);
                }
            )
        );
    }

    renderEl(el,indx){
        //console.log(el);
        return (
            <li key={`${el.key}${indx}`}><input ref={(inp)=>{this.refInp = inp}} type={el.type} placeholder="First name" value={this.state[el.key]}
            onChange={(e) =>{this.changeImp(e,  el.key)}}></input></li>
        )
    }

    componentDidMount(){
        console.log("Ref INp : ", this.refInp);
        this.refInp.focus();
    }

  render() {
  
    return (
<div>
       <div className="signUp">
      <ul className="formContainer">
            {this.renderForm()}
            
            <li><input    type="submit" placeholder="Submit" onClick={
                this.props.submitAction.bind(this.props.that, this.state)}

                ></input></li>
      </ul>
      
    </div> 

</div>
    );
  }
}

export default Form;
