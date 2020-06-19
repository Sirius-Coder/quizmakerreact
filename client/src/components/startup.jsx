import React from 'react';
import '../styles/startup.css';
import { Link } from 'react-router-dom';
 

function Entrypage(){
    
    return(
    <div className="box">
        <h1 className='animate__animated animate__lightSpeedInRight animate__slow'>QUIZ.IO</h1>
        <div className="link">
        <Link to="/viewQuiz" className="a"> Take a Quiz</Link>
        <Link to="/enterName" className="a">Make a New Quiz</Link>
        </div>
    </div>
    )

}

export default Entrypage;