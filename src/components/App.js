import React, { useState } from 'react';
import '../styles/App.css';

export default function App(){
  const [counter, setCounter] = useState(1);

  function handlerIncrement(){
    setCounter(counter+1);
  }
  function handlerDecrement(){
    setCounter(counter-1);
  }

  let className = 'normal';
  if(counter%3===0){
    className='fizz';
  }
  else if(counter%5==0){
    className='buzz';
  }
  else if(counter%3==0 && counter%5){
    className='fizzbuzz';
  }
  return(
    <>
      <button id='increment' onClick={handlerIncrement}>increment</button>
      <div id='counter' className={className}>{counter}</div>
      <button id='decrement' onClick={handlerDecrement}>decrement</button>
    </>
  )
}
