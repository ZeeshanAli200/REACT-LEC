import React from "react";
import { Link } from "react-router-dom";
function TweetHomeNav(){
return (
    <div>
 
        <Link to='/userHomepage'> Home </Link>
        <Link to='/mytweets'> My tweets </Link>
        <Link to='/userprofile'> Profile </Link>
    </div>
)
}
export default TweetHomeNav