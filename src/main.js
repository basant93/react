/*
component state
Initialization - > Updattion -> Unmount

state is obj literal
this.state can be set in class constructor
bind is used so that it does not get executed rightaway
view -> model data binding onChange
model ->view  data binding value
nested object literal

services and high order component
hoc is a functiContext.json that takes a component to wrap as parameter

Browser router and hasrouter
*/

import React, { Component } from 'react';
import './App.css';
import SignUp from './signUp';
import SignIn from './signIn';
import RenderList from './RenderList';
import HOC from './HOC';
import CountryContext from './Context';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Switch from 'react-router-dom/Switch';
import UserDashboard from './UserDashboard';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            action:0,
            fName: "Basant",
            signUp :{fName : '', lName:'', email :'', pass:''},
            signIn : {email:'', pass:''},
            list :[{name: "Akash"}, {name:"asant"}, {name:"Hello"}]
        }

        

        console.log("[Main.js] inside constructor ....");
    }

    componentWillMount(){
        console.log("[Main.js] component will mount ....");
    }

    componentDidMount(){
        console.log("[Main.js] component did mount ....");
    }
    changeAction(val){
        console.log(val);
        this.action =val;
        this.setState({action:val});
        this.setState({fName:"Basant"});

        
        
    }
  
    changeImp(e, key, subKey){
        //this.setState({fName:e.target.value})

        let tempObj = {};
        for (let k in this.state[key]){
            tempObj[k] = this.state[key][k];
        }
        tempObj[subKey] = e.target.value;

        this.setState({
            [key]: tempObj
        });
        console.log(this.state);
    }

    deleteList( indx){
        let tempArray =  this.state.list.slice();
        tempArray.splice(indx,1);
        this.setState({list:tempArray});
        

    }



  render() {
    console.log("[Main.js] render executed ....");
    //const RenderList = <RenderList deleteList={this.deleteList}  that={this} list={this.state.list}/>;

    const HOCComponent  = HOC(RenderList);
    //will be state variable
    let loggedInStatus = true;
    return (
        <BrowserRouter>
        
<div>
{/* <Route path="/" exact render={() => <h1> Hello  load 1</h1>}/> */}
<Header />
<Switch>
{ <Route path="/signIn" exact component={SignIn}/> }

 
 
<Route path="/signIn/:type" exact component={SignIn}/>
<Route path="/signUp" exact component={SignUp}/>
<Route path="/userdashboard" exact component={loggedInStatus? UserDashboard : null}/>
<Route path="/signUp" exact render={() => <h1> Hello basant </h1>}/>
<Route path='/' render={() => <h1>Hello bro This is home page   </h1>} />

<Route  render={() => <h1> Page not found   </h1>} />
</Switch>
 {/* <Route path="/renderlist"  render={() => <RenderList deleteList={this.deleteList}  that={this} list={this.state.list} /> */}
{/* <Route path="/renderlist" component={<HOCComponent  deleteList={this.deleteList}  that={this} list={this.state.list}/>}/> */}
{/* <Route path="/" render={() => <h1> Hello  router load 2</h1>}/> */}
    <div>
        <button onClick={this.changeAction.bind(this,0)}>Sign Up</button>
        <button onClick={this.changeAction.bind(this,1)}>Sign In</button>
    </div>


{/* <CountryContext.Provider value={{"country" :"Sri Lanka"}}>
{this.state.action ==0 && <SignUp />} 
</CountryContext.Provider> */}

      {/* {this.state.action ==0 && <div className="signUp">
      <ul className="formContainer">
            <li><input type="text" placeholder="First name" value={this.state.signUp.fName}
            onChange={(e) =>{this.changeImp(e, 'signUp', 'fName')}}></input></li>
            <li><input type="text" placeholder="Last  name" value={this.state.signUp.lName}
            onChange={(e) =>{this.changeImp(e, 'signUp', 'lName')}}></input></li>
            <li><input type="email" placeholder="Email" value={this.state.signUp.email}
            onChange={(e) =>{this.changeImp(e, 'signUp', 'email')}}></input></li>
            <li><input type="password" placeholder="Password" value={this.state.signUp.pass}
            onChange={(e) =>{this.changeImp(e, 'signUp', 'pass')}}></input></li>
            <li><input type="submit" placeholder="Submit"></input></li>
      </ul>
      
    </div> } */}
    {/* {this.state.action ==1 && <SignIn />} */}
{/* this.state.action ==1 && <div className="signIn">
<ul className="formContainer">
      <li><input type="email" placeholder="Email"></input></li>
      <li><input type="text" placeholder="Password"></input></li>
      
      <li><input type="submit" placeholder="Submit"></input></li>
</ul>

</div> */}
{/* <RenderList deleteList={this.deleteList}  that={this} list={this.state.list}/> */}

{/*<HOCComponent  deleteList={this.deleteList}  that={this} list={this.state.list}/> */}



</div>
</BrowserRouter>
    );
  }
}

export default Main;
