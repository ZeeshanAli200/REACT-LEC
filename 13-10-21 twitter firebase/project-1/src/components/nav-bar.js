import React from "react";
import { Link } from "react-router-dom";
function Nav(){
return (
    <div>
 
        <Link to='/users'> Register </Link>
        <Link to='/login'> Login </Link>
    </div>
)
}
export default Nav