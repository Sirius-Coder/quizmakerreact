import React from 'react';
import{Route,Switch} from 'react-router-dom';
import Startup from './components/startup.jsx';
import EnterName from './components/enterQuizName.jsx';
import MakeQuiz from './components/makeQuiz.jsx';
import SubmitQuiz from './components/submitQuiz.jsx';
import ViewQuiz from './components/viewQuiz.jsx';

import './App.css';

function App(){
  return(
    
    <div className="main-container">
     
      <Switch>
        
        <Route path="/" component={Startup} exact />
        <Route path="/enterName" component={EnterName} />
        <Route path="/makeQuiz" component={MakeQuiz} />
        <Route path='/submitQuiz' component={SubmitQuiz}/>
        <Route path='/viewQuiz' component={ViewQuiz}/>
        
      
      </Switch>
      
    </div>
    
  )
}

export default App;
