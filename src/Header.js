import React, {Component} from 'react';

class Header extends Component{

    render(){
        
        return(

            <ul>
           
                <li className="App-Ink"><a href="/signIn"> signIn</a></li>
                <li><a href="/signUp"> signUp</a></li>
                <li><a href="/renderlist"> Render List</a></li>
           
            </ul>
        );
    }
}

export default Header;