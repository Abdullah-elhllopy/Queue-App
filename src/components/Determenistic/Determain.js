import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landa from './Landa'
import Mue from './Mue'
const determain = () => {
  return (
    <Router>
   
   <div className = "d- inline mt-2 " style={{marginLeft:105}}>
     <span className = "m-3  fst-normal"><strong>Please Select Type of Queue :</strong></span>
            
            <Link to='/landa' className = "btn  btn-outline-dark   text-warning" style = {{width :300,height :50 ,fontSize :25 ,marginLeft:20}}><strong>λ > μ</strong> </Link>

            <Link to='/mue' className = "btn btn-outline-dark   text-warning" style = {{width :300,height :50 ,fontSize :25 ,marginLeft:30}}><strong>μ > λ</strong> </Link>
      
     </div>   
 
     
    <Switch>
        <Route exact path='/landa'>
          <Landa/>
        </Route>
        <Route path='/mue'>
          <Mue />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default determain;
