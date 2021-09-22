import React from "react";
import { Link } from "react-router-dom";
function Nav(){
return (
    <div>
        <Link to='/about'> About </Link>
        <Link to='/'> Home </Link>
        <Link to='/product'> Products </Link>
        <Link to='/login'> Login </Link>
    </div>
)
}
export default Nav