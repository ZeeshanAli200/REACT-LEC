import React, { useContext, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";

// import FreeAPI from "../screens/api/indexApi";

import Users from "../screens/usersList/users";
import Login from "../screens/usersList/login";
import UserHome from "../screens/tweethomePages/userHome";
import MyTweets from "../screens/tweethomePages/myTweets";
import Profile from "../screens/tweethomePages/myProfile";
import {doc,createUserWithEmailAndPassword,db,collection,addDoc,getDocs,getDoc,
  setDoc
} from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'
import Nav from "../components/nav-bar";
import { GlobalContext } from '../screens/context/context'
function Routes() {
  // let history = useHistory()
  const { state, dispatch } = useContext(GlobalContext);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
         fetchCurrUser(user.uid)

          }
          else {
             dispatch({type:"delauth",payload:{}})
          }
      })
  }, []);
  const fetchCurrUser= async (uid)=>{
    let docRef=doc(db,'users',uid)
    let userInfo=await getDoc(docRef)
    userInfo=userInfo.data()
    console.log(userInfo);

    dispatch({type:'Curr_User',payload:userInfo})


  }
  return (
    <Router>

      <Switch>
        {/* {
              Object.keys(state.authUser).length > 0?(
              <>
              {console.log(state.authUser)} */}

        {/* </>
              ):(
                  
               <>
               
               {console.log(state.authUser)} */}
        {/* <Route exact path="/users"><Users/></Route>
                <Route exact path="/login"><Login/></Route>
                <Route exact path="/"><Nav/></Route> */}
        {/* </>
              )
          } */}
        <Route exact path="/users"><Users /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/"><Nav /></Route>

        <Route exact path='/userHomepage'><UserHome /></Route>
        <Route path='/mytweets'><MyTweets /></Route>
        <Route path='/userprofile'><Profile /></Route>




      </Switch>

    </Router>
  )
}
export default Routes