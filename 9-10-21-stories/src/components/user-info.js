import React from "react";


function UserInfo({userName,organisation,institute,occup}){
    return(
        <div>
            <h2>Trainer Name: {userName}</h2>
            {
             organisation ?
                (
                <div>
            <h2>Organisation :{organisation}</h2>
            <h2>Occupation: {occup}</h2>
            </div>    
                ):(
                    <div>
            <h2>Student Name: {userName}</h2>
            <h2>Institute :{institute}</h2>
            <h2>Occupation : {occup}</h2>
            </div>             
                
                )
            }
                
        </div>
    )
}
export default UserInfo
  