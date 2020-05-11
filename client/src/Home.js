import React, { Component } from 'react';
import fire from './config/fbConfig';
import Save from './components/fichier/Save';
/*
const signout=()=>{
  fire.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('success');
    
  }).catch(function(error) {
    // An error happened.
  });}
*/
const Home = () => {
  return (
    <>
    <h1>Welcome {fire.auth().currentUser.displayName}</h1>
    <br/>
    <Save/>
    <br/>
      <button className="btn pink lighten-1 z-depth-0" onClick={()=>fire.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;