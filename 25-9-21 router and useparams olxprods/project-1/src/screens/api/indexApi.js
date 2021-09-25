import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://api.publicapis.org/entries';


function FreeAPI() {
    let [dataentry, setdataentry] = useState([])
    useEffect(async () => {
        let { data } = await axios.get(URL);
        setdataentry(data.entries)


    }, []);
// <h1></h1>
         // <h1 key={keys}>{dumyData.API}</h1>
        
                    {/* {console.log(dataentry)} */}

        
    return (
        
                dataentry.map((dumyData, keys) => {
                   
                    return (
                        <div>
                            <h1>{dumyData.Category}</h1>
                            <a href={dumyData.Link}><p>{dumyData.Description}</p></a>
                        </div>
                    )
                })
        
        





    );
}

export default FreeAPI;