// a functional component because it has not a state
import React from 'react';
import{NavLink} from 'react-router-dom';
const SinedOutLinks=()=>{
    return(
    <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
    </ul>
    )
}

export default SinedOutLinks;