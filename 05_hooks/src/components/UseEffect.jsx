import React, { useEffect, useState } from 'react'

export default function UseEffect() {
     const [count , setcount]=useState(0)
     const [total, settotal]=useState(0)

    //variation:1 
    //runs on every render
    // useEffect(()=>{
    //     alert("I will render on every Render")
    // })

    // variation : 2
    // runs only on first render
    // useEffect(()=>{
    //     alert("Iwill Render only on first Render")
    // },[])
    
    // variation : 3
    // runs on Effect of listed dependencies (single)
    // useEffect(()=>{
    //     alert("I will run every time when count is updated")
    // },[count])

    // variation : 3
    // runs on Effect of listed dependencies (Multiple)
    // useEffect(()=>{
    //     alert("I will run every time when count/total is updated")
    // },[count,total])

     //variation: 5
    //with cleanup function
    useEffect(() => {
        alert("I will run every time when count is updated")
    
      return () => {
        alert("count is unmounted")
      }
    }, [count])
    
  return (
    <div>
      <div>Count : {count}</div>
      <button  onClick={()=>{setcount(count+1)}}>Inc Count</button>

      <div>Total:{total} </div>
      <button onClick={()=>{settotal(total+1)}}>INC Total</button>
    </div>
  )
}
