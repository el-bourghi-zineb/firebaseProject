import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fire from "../../config/fbConfig";
import { AuthContext } from "../../components/Auth";
import{NavLink} from 'react-router-dom';
import firebase from 'firebase/app';

const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
const HandleGoogle = useCallback(
  async event =>{
    event.preventDefault();
    const provider=new firebase.auth.GoogleAuthProvider();
    try{
      await fire
      .auth().signInWithPopup(provider).then(function(result){
        history.push("/");
        console.log("Success")
      })
    }catch(error){
      alert(error);
    }
  },[history]
);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
        return (
            <div className="container">
                       <form onSubmit={handleLogin} className="white ">
                           <h5 className="grey-text text-darken-3">Sign In</h5>
                            <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" ></input>
                            </div> 

                            <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" ></input>
                            </div> 
                           
                           <div className="input-field">
                             <button className="btn pink lighten-1 z-depth-0">Login</button> 
                           <div className="red-text center">
                           </div>
                           </div>
                             <div className="input-field">
                             <button className="btn pink lighten-1 z-depth-0" onClick={HandleGoogle}>Sign In With Google</button> 
                           </div>
                           
                           <div className="input-field">
                            <p>Don't have an account? Sign Up <NavLink to='/sign'> here</NavLink></p>  
                           </div>

                       </form>
            </div>
        )
    }



export default withRouter(SignIn);