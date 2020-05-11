import React, { Component } from 'react';
import './App.css';
import fire from './config/fbConfig';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './index.css';

import {AuthProvider} from './components/Auth';
import PrivateRoute from './PrivateRoute';
import MoreInfo from './components/layout/MoreInfo';
import Profile from './components/auth/Profile';
import Update from './components/fichier/update';

function App() {
  
 
    return (
      <AuthProvider>
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <h1>L'hébergement des fichiers</h1>
      <p>Nous vous donne l'opportunité de stocker vos fichiers sans soucis de gestion d'infrastricture. Notre application vous offre les services de sauvgarde des fichiers de façon sécurisés. Pour plus d'informatons, clique More Info au dessus.</p>
        <Route exact path='/moreinfo' component={MoreInfo}/>  
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
       <Route exact path='/change' component={Update}/>
       <Route exact path='/profile' component={Profile}/>
       <Route exact path='/redirect' component={SignIn}/>
       <Route exact path='/back' component={Profile}/>

        </div>
    </BrowserRouter>
    </AuthProvider> 
     
    );
  }

export default App;

