import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10)
  const increaseVal=()=>{
    if(counter<20){
      counter+=1;
      setCounter(counter)
    }
  }
  const decreaseVal=()=>{
    if(counter>0){
      setCounter(counter=counter-1)
    }
  }

  return (
    <>
    <h1>Counter value: {counter}</h1>
    <button type="button" onClick={increaseVal}>Increase: {counter} </button>
    <button type="button" onClick={decreaseVal}>Decrease: {counter} </button>
    <br />
    <button type="button" disabled>Footer:{counter} </button>
    </>
  )
}

export default App
