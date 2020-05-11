// a functional component because it has not a state
import React, { Component } from 'react';
import fire from '../../config/fbConfig';
import {NavLink} from 'react-router-dom';


class Update extends Component{

constructor(props){
    super(props);
    this.state={
        newPassword:'', 
    }
}
 handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value});
 }

onChangePassword=()=>{
    const user =fire.auth().currentUser;
    //const  newPassword =getASecureRandomPassword();

    console.log(user.email);
     user.updatePassword(this.state.newPassword).then(()=>{
           alert("Password was changed");

     }).catch(error=>{
          alert(error.message);
     });
}
    render(){
    return(
        <div className="container">
       <input value={this.state.newPassword} onChange={this.handleChange} type="password" name="newPassword"  placeholder="newPassword"></input>  
       <button  className="btn pink lighten-1 z-depth-0" onClick={this.onChangePassword}>Change Password</button>
       <br/>
       <NavLink to='/back'>Back</NavLink>
        </div>
    
    )
}
}

export default Update;