import React, { useEffect, useState, useRef } from "react";

export default function Useref() {
  /*const [count, setCount] = useState(0);
    // let val=0         //normal variable does not retain the value between renders , it initialize again after each render
  let val = useRef(0)   //useref is useed to retain the value of variable between the renders
  let btnRef= useRef()
  

  function handleCounter() {
    setCount(count + 1);   //useState re-render the component

    // val=val+1
    // console.log(val)

    val.current = val.current + 1     //useRef variable does not re-render rhe component
    console.log(val.current)
  }

//   it runs on every render
  useEffect(() => console.log("render"));

  function changeColor(){
    console.log(btnRef.current)
    btnRef.current.style.backgroundColor="red"
  }*/

    const[time,setTime]=useState(0)
    let refInterval=useRef(null)
    function handleStartTimer(){
        refInterval.current = setInterval(()=>{
            setTime(time => time+1)
        },1000)
    }
    useEffect(() => console.log("render"));

    function handleStopTimer(){
        console.log(refInterval.current)
        clearInterval(refInterval.current)
        refInterval.current=null
    }

    function handleResetTimer(){
        setTime(0)
    }

  return (
    <>
    {/*<div>
      <button ref={btnRef} onClick={handleCounter}>Increment</button>
      <button onClick={changeColor}>change color </button>
      <div>Count: {count} </div>
    </div>*/}

    <h1>Timer: {time}</h1>
    <button
    onClick={handleStartTimer}
    >Start</button>

    <button
    onClick={handleStopTimer}
    >Stop</button>

    <button
    onClick={handleResetTimer}
    >Reset</button>
    </>


  );
}
