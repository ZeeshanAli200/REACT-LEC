import React from "react";

import { useParams } from 'react-router-dom'

const allStudents = {   
    2643: {
        name: 'haider',
        rollNum: 2643,
        subject: 'JavaScript'
    },
    2644: {
        name: 'abdullah',
        rollNum: 2644,
        subject: 'React'
    },
    2645: {
        name: 'muzammil',
        rollNum: 2645,
        subject: 'HTML'
    },
    2646: {
        name: 'ahmed',
        rollNum: 2646,
        subject: 'CSS'
    }
}
function StudentDetail() {
    let { rollNumber } = useParams()
    let { name, rollNum, subject } = allStudents[rollNumber]
    return (
        
        <div>
            {console.log(name)}
            <h1>{name}</h1>
            <p>Your Roll Num is {rollNum} and subject is {subject}</p>
        </div>
    )
}
export default StudentDetail