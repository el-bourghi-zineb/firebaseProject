import React, { useEffect, useState } from "react";
import fire from "../config/fbConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [idToken, setIdToken]=useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      /*
      if(fire.auth().currentUser){
        setIdToken( fire.auth().currentUser.getIdToken());
      }else{
        setIdToken(null);
      }
      console.log("Token changed to "+idToken);
      */
     setCurrentUser(user);
     setPending(false);
    });
  }, []);

 if(pending){
   return <>Loading</>
 }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};