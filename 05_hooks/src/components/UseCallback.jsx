import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

export default function UseCallback() {
    const [count , setCount]=useState(0)
    const alertFunction=useCallback(()=>{
        alert("this is Alert..")
    },[])
  return (
    <div>
      <div>Count:{count} </div>
      <button onClick={()=> {setCount(count+1)}}>INC</button>
      <ChildComponent name="Ayush" alertFunction={alertFunction}/>
      
    </div>
  )
}
