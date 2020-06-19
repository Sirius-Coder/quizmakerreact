import React ,{useState,useEffect} from 'react';
import styles from '../styles/makeQuiz.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { render } from '@testing-library/react';

var el;
 
function MakeQuiz()
{
    
    const [quest,setquest]=useState('');
    const[choiceval,setChoice]=useState(0);
    const[quizName,setquizName]=useState('Default Quiz Name')
    const data=(data)=>{
      setquest(data)      
    }
    const choice=(choice)=>{
        setChoice(1);
        
    }
    el=document.getElementById('quizSub')
   
     useEffect(()=>{axios.get('/back').then(res=>{setquizName(res.data)}
     ).catch(e=>console.error(e)
     )})
    
return(
    <div className={styles.container} >
        <header className={styles.head}>{quizName}</header>
        <div className={styles.workarea}>
        <Sidebar question={quest} />
        <Maker data={data} choice={choice}/>
        </div>
        <div className={styles.buttonpos}>
            <form id="quizSub" >
        <input  type="submit" className={styles.submitbutton} value="Submit Question" style={{background:'#3EC300'}}/>
        </form >
        <Link to='/submitQuiz'><input type='submit' className={styles.submitbutton} value='Submit Quiz'/></Link>
        </div>
    </div>
)
}

function Sidebar(props){
    
    return(
        <div className={styles.sidebar}>
            <label>Questions</label>
            <nav className={styles.navbar}>
                
                <ol>
                   <OptionTitle quest={props.question} />
                </ol>
            </nav>
        </div>
    )
}
function OptionTitle(props)
{
    return(
        <div className={styles.sidequestion}> 
            {questions.map(para=>(<li>{para}</li>))}
        </div>
       
    )
}


function Maker(props){
    
    return(
        <div className={styles.maker}>
            <Title data={props.data}/>
            <Choice choiceprop={props.choice} title={props.data}/>
        </div>
    )
}
//Displays the Title of the quiz
var questions=[];
function Title(props){
    const[title,setTitle]=useState('');
    const setter=(e)=>{ 
        setTitle(e.target.value);
    }
    
    const petter=(e)=>{
        if(e.keyCode===13)
        {
            questions.push(e.target.value)  //Will push all the question modify it so that only after submit
            props.data(title);
            setTitle('');
        } 
    }
return(
    <div className={styles.quiztitle}>
       <h1>Enter the Question</h1>
        <input type="text" value={title} onChange={setter} onKeyUp={petter}></input>
        <h2>{title}</h2>
    </div>
)
}
//Displays the choices of the quiz
var choiceCount=0;
function Choice(props){
    var [choice,setChoice]=useState([]);
    const getter=(e)=>{
        if(e.keyCode===13)
        {
         setChoice(choice.concat([{data:e.target.value,correct:false,id:++choiceCount}]))
        
         props.choiceprop(choice);
         
         document.getElementById('input').value='';  
        }           
    }
    const submit=(e)=>{
        e.preventDefault();
       
    }
    const delchoice=(id)=>{                                     //Deleting a Choice
        setChoice(choice.filter((para)=>para.id!==id))      
    }
  
   useEffect(()=>{ 
    if(el){
        
        el.addEventListener('submit',(e)=>{
            e.preventDefault();
            
            axios.post('/model',{question:questions[questions.length-1],choice}).then(res=>console.log('Success')).catch(e=>console.error(e))
            setChoice([]);
            choiceCount=0;
                })
               
            }
   },[choiceCount===4])
    //Adding Our Choice to the Database
    
    return(
        <div className={styles.choicemaker}>
             <h2>Enter Your Choices</h2>
            <input id="input" type="text" placeholder='Enter'  onKeyUp={getter} onSubmit={submit}/>
           
            <Option value={choice} delChoice={delchoice}  />
            
        </div>
    )
}
function Option(props){
    
    const setter=(bool,id)=>{
         props.value.map((gara)=>{if(gara.id==id)
                                                gara.correct=bool})
}
    return(
        <div>
           <h2> {props.value.map((gara)=>(<Optionitem key={gara.id} id={gara.id} data={gara.data} setter={setter} correct={gara.correct} delChoice={props.delChoice}/>
           
           ))} </h2>
           
           
        </div>
    )
}

function Optionitem(props){
    var [state,setState]=useState(props.correct)
    const[backcol,setBackCol]=useState("transparent")
    const changeState=(e)=>{
        e.preventDefault();
        setState(!state)
        state?setBackCol("transparent"):setBackCol("#218380");
        props.setter(state,props.id)
    }
    const deleteChoice=(e)=>{
        e.preventDefault();
         props.delChoice(props.id);
    }
    const backcolor={
        backgroundColor:backcol
    }
return(
    <div className={styles.choice} style={backcolor}>
        <h3>{props.id}. {props.data} </h3>
        <a href="#" onClick={changeState}><i className="fas fa-check-circle"></i></a>
        <a href="#" onClick={deleteChoice}><i className="fas fa-times-circle"></i></a>
    </div>
)
}

//Add to the Side bar
export default MakeQuiz;