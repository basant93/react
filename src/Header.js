import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    render(){
        
        return(

            <ul>
           
                <li className="App-Ink"><NavLink to= {{ pathname: "../signIn"}} activeClassname="activeLink">SignIn</NavLink></li>
                <li><NavLink to={{pathname : "../signUp"}} activeClassname="activeLink"> SignUp</NavLink></li>
                <li><NavLink to="../renderlist" activeClassname="activeLink"> Render List</NavLink></li>

            </ul>
        );
    }
}

export default Header;