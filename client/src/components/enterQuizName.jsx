import React from 'react';
import {Link} from 'react-router-dom';
import styles from'../styles/enterQuizName.module.css';
import axios from 'axios';

function EnterName() {
    const setTitle=(e)=>{  
        e.preventDefault();
        if(e.keyCode===13){
    axios.post('/back',{title:e.target.value}).then(res=>console.log(res))
    .catch(err=>console.error(err))
} 
} 
    return ( 
        <div className={styles.parentDiv}>
        <div className = {styles.container}>
            <h1 className='animate__animated animate__rubberBand'> Enter the Name of Your Quiz </h1>
            
            <input type="text" className='animate__animated animate__bounce' placeholder="Enter Here" onKeyUp={setTitle} />
            
            <Link to="makeQuiz" ><button className={styles.btn} > Let's Start</button></Link>
        </div>
        </div>
    )
} 

export default EnterName 
