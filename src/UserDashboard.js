import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Post from './Post'

class UserDashboard extends Component{

    render(){
        return(
            <div>
            <h1>Welcome User</h1>
            <div> User dashboard </div>
            <Route  path={`${this.props.match.url}/:post`} exact component={Post}/>
        </div>
        );
        
    }
}

export default UserDashboard;