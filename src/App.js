
import React,{useState}from 'react';
import Tours from './components/Tours.js'
import data from './Data.js'
import './App.css';

const App =()=>{
  const[tours,setTours]=useState(data)
  function removeTour(id){
        const newTours=tours.filter(tour =>tour.id!==id);
        setTours(newTours);
  }
  return (
    <div>
    
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )

};
export default App;