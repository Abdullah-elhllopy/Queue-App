import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Randmain from './components/Random/Randmain'
import Determain from './components/Determenistic/Determain'
const main = () => {
  return (
    <Router>
   
   <div className = "d- inline mt-2 " style={{marginLeft:105}}>
     <span className = "m-3  fst-normal"><strong>Please Select Type of Queue :</strong></span>
            
            <Link to='/determain' className = "btn  btn-outline-dark   text-warning" style = {{width :300,height :50 ,fontSize :25 ,marginLeft:20}}><strong>determenistic</strong> </Link>

            <Link to='/randmain' className = "btn btn-outline-dark   text-warning" style = {{width :300,height :50 ,fontSize :25 ,marginLeft:30}}><strong>random</strong> </Link>
      
     </div>   
 
     
    <Switch>
        <Route exact path='/determain'>
          <Determain />
        </Route>
        <Route path='/randmain'>
          <Randmain />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default main;



