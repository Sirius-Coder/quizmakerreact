import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/submitQuiz.css';

function SubmitQuiz()
{
    return(
        <div className="sub-container">
            <h1 className="animate__animated animate__tada  ">Congratulations Your Quiz Has Been Submitted !</h1>
           <Link to="/"> <a>Back To Homepage</a></Link>
        </div>
    )
}

export default SubmitQuiz;