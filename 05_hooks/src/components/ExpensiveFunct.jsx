// Example to UnderStand the useCallback Hook


import React, { useCallback, useRef, useState } from 'react'
import { useEffect } from 'react'

export default function ExpensiveFunct() {

  const [count, setCount]=useState(0)
  const [Input, setInput]=useState(0)
  const funcRef=useRef(null)

    const expensiveOperation=useCallback((num)=>{  //Usecallback cache the function refrence menas it does not "Re-create" the funtion untill any change in dependenies, but function will run on every render 

      console.log("Expensive Operation Runs")
      for(let i=0;i<=1000000000; i++){}           //while Usememo cache the result of function and "Stop" the run of the function untill sny dependencies changes
      return num*2
    },[Input])
    const expResult=expensiveOperation(Input)

    // to check if function is creted or not on every render
    useEffect(()=>{
      if(funcRef.current){
        if(funcRef.current===expensiveOperation){
          console.log("function is not created")
        }
        else console.log("function is created")
      }
      else{
        funcRef.current=expensiveOperation
        console.log("funct ref is not null")
      }
    })

  return (
    <div>
      <div>Count:{count} </div>
      <button onClick={()=>{setCount(count+1)}}>INC</button>

      <div>expensiveOperation: {expResult}</div>
      <input type="number"
      value={Input}
      onChange={(e)=>setInput(e.target.value)}
      />
    </div>
  )
}
