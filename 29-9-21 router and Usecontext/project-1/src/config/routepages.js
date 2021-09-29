import React from "react";
import Home from "../screens/home";
import About from "../screens/about";
import Student from "../screens/student";
import StudentDetail from "../screens/student-detail";
import Product from "../screens/product/product";
import ProductDetail from "../screens/product/product-detail";
// import Login from "../screens/login";
import FreeAPI from "../screens/api/indexApi";
import Snacks from "../screens/snaack";
import Users from "../screens/usersList/users";
import Login from "../screens/usersList/login";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Nav from "../components/nav-bar";
function Routes(){
return (
    <Router>
        <Nav/>
        <Switch>
            <Route exact path="/home"> <Home/> </Route>
            <Route exact path="/about"> <About/> </Route>
            
            <Route exact path="/student"> <Student/> </Route>
            <Route exact path="/student-detail/:rollNumber"><StudentDetail/></Route>
            <Route exact path="/product"><Product/></Route>
            <Route exact path="/product/product-detail/:prodCode"><ProductDetail/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/api"><FreeAPI/></Route>
            <Route exact path="/snacks"><Snacks/></Route>
            <Route exact path="/users"><Users/></Route>
            <Route exact path="/login"><Login/></Route>
        </Switch>
         
    </Router>
)
}
export default Routes