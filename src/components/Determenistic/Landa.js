import { useState } from 'react';
import CanvasJSReact from '../../canvasjs.react';
import Aux from '../../hoc/Auxiliary'
var React = require('react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Landa = ()=> {	
  const[Lamda , setLamda] = useState('');
  const[Mue, setMue] = useState('')
  const[time , settime] = useState('')
  const[showGraph , setShowGraph] = useState(false)
function fraction(f) {
  return f.split('/').reduce((n, d, i) => n / (i ? d : 1));
}

var arr = [{x:1,y:1}];
var k = Number( time)+1
var ti = 0
ti = ((k *Lamda) - Mue)/ (Lamda *(Lamda-Mue))
ti = Number( ti.toFixed(0) )
var realTi = 0
var x = 0
for(let i =0 ;i<5 ; i++){
    realTi = ti-time;
    x = Math.floor( Lamda*realTi ) - Math.floor(realTi*Mue - (Mue/Lamda))
    console.log(x) 
}



var n = 0;




    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{				
                type: "stepArea",
                dataPoints:  [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
       }]
   }
   return (
     <Aux>
     <div className="input-group my-4">
        <span className="input-group-text mx-3" >λ</span>
        <input type="text" aria-label="First name" className="form-control" onChange = {(e)=>setLamda( fraction( e.target.value))}/>
       
        <span className="input-group-text mx-3">μ</span>
        <input type="text" aria-label="Last name" className="form-control" onChange = {(e)=>setMue(fraction( e.target.value))}/>
       
        <span className="input-group-text mx-3">k-1</span>
        <input type="text" aria-label="Last name" className="form-control" onChange = {(e)=>settime(fraction( e.target.value))}/>
    </div>
      <div className ="d-flex justify-content-center">
          <button className="btn btn-info btn-lg " onClick = {()=>setShowGraph(true)}>Calculate</button>     
       </div> 
     <div>
    
     { showGraph&& <CanvasJSChart options = {options} 
            /* onRef = {ref => this.chart = ref} */
        />}
      </div>
    </Aux>
    );
  
}

export default Landa;
