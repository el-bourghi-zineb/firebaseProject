// a functional component because it has not a state
import React, { Component,useState } from 'react';
import fire from '../../config/fbConfig';
import {NavLink} from 'react-router-dom';
const Profile=()=> {

    return (
      <div className="container">
         <p>Welcome in your profile</p>
        <br/>
          {fire.auth().currentUser.email}
          <br/>
          {fire.auth().currentUser.displayName}
          <br/>
          <img
              alt="profile picture"
              src={fire.auth().currentUser.photoURL}
            />
            <br/>
            <div className="input-field">
             <NavLink to='/change'>Update Password</NavLink>
            </div>
     <NavLink to='/'>Back</NavLink>
       </div>
    );
  }

 

   

export default Profile;