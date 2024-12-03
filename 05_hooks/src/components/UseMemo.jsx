import React, { useMemo, useState } from 'react'
import "../App.css";

export default function UseMemo() {
  const[Count,setCount]=useState(0)
  const [Input, setInput]=useState(0)
  

  function expensiveFunction(num){
    for(let i=0;i<=1000000000; i++){}
    return num*2
  }

   let doubleValue=useMemo(()=> expensiveFunction(Input) , [Input]) //when Input changes then only re-render this expensive opration


  return (
    <div>
      <button onClick={()=> setCount(Count+1)}>Increment</button>
      <div>Couter: {Count}</div>

      <input type="number"
      value={Input}
      onChange={(e)=>setInput(e.target.value)}
      />

      <div>Doble value: {doubleValue}</div>


    </div>
  )
}
