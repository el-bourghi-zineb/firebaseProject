
// a functional component because it has not a state
import React from 'react';
import{NavLink} from 'react-router-dom';
const SignedInLinks=()=>{
    return(
    <ul className="right">
        <li><NavLink to='/moreinfo'>More Info</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li>

    </ul>
    )
}

export default SignedInLinks;