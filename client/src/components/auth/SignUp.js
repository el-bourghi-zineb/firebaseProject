import React, { useCallback } from "react";
import { withRouter } from "react-router";
import{NavLink} from 'react-router-dom';
import fire from "../../config/fbConfig";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await fire
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

        return (
            <div className="container">
                       <form onSubmit={handleSignUp} className="white ">
                           <h5 className="grey-text text-darken-3">Sign Up</h5>
                            

                            <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" ></input>
                            </div> 

                            <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" ></input>
                            </div> 
                           

                           <div className="input-field">
                             <button className="btn pink lighten-1 z-depth-0">Sign Up</button> 
                           </div>
                           <div className="input-field">
                            <p>Already have an account? <NavLink to='/redirect'>Sign In here</NavLink></p>  
                           </div>
                       </form>
            </div>
        )
    }


export default withRouter(SignUp);