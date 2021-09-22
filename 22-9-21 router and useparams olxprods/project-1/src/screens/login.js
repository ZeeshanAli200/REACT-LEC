import React,{useState} from "react";
import {Link,useHistory } from "react-router-dom";


const allUser = {
    
        email: 'zeeshan99881@gmail.com',
        pass: 'abc123'


    



}
function Login() {
    let history=useHistory()
    let [userName,setuserName]=useState('')
let [userpass,setuserpass]=useState('')
    return (
        <div>
                <div style={{ textDecoration: 'none', width: '70%', margin: '10px auto', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', border: '2px', borderStyle: 'double', borderColor: '#ccd5d6', borderRadius: '6px', padding: '10px' }}>
                    <label htmlFor="">Email: <input onChange={(event)=>{setuserName(event.target.value)}} type="text" name="" id="" value={userName} /></label>
                    <label htmlFor="">Password: <input onChange={(event)=>{setuserpass(event.target.value)}} type="text" name="" id="" value={userpass} /></label>
                    <button onClick={()=>
                    {
                        userName==allUser.email&&userpass==allUser.pass?(
                            history.push('/home')
                        )
                        :(
                           
                            history.push('/login')
                        
                        )
                    }
                    
                    }>Login</button>
                </div>
                
        </div>
    )
}
export default Login