import React from 'react';
import{Link} from 'react-router-dom';



const Navbar=()=>{
    return(
     <AppBar>
         <Toolbar className="nav-container">
           {authenticated ? (
              <Fragement>
                  <MyButton tip="Logout">
                      <KeyboardReturn color="inherit"></KeyboardReturn>
                  </MyButton>
              </Fragement>
           ) : (
              <Fragement>
                  <Button color="inherit" component={Link} to="/login">Login</Button>
                  <Button color="inherit" component={Link} to="/home">Home</Button>
                  <Button color="inherit" component={Link} to="/signup">SignUp</Button>

              </Fragement>
           )}
         </Toolbar>
     </AppBar>
    )
}


export default Navbar;