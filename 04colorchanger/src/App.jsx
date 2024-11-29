import { useState } from "react"


function App() {
  const [color , setColor]= useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color }} >
        <div className="fixed flex flex-wrap justify-center items-center bottom-14 inset-x-2">
        <div className="flex flex-wrap justify-center items-center bg-white px-4 py-2 rounded-md gap-3 shadow-2xl">
        <button 
          onClick={() => setColor("red")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-white"
            style={{backgroundColor: "red"}}
            >Red</button>
        <button 
          onClick={() => setColor("blue")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-white"
            style={{backgroundColor: "blue"}}
            >blue</button>
        <button 
          onClick={() => setColor("green")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-white"
            style={{backgroundColor: "green"}}
            >green</button>
        <button 
          onClick={() => setColor("grey")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-white"
            style={{backgroundColor: "grey"}}
            >grey</button>
        <button 
          onClick={() => setColor("yellow")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-black"
            style={{backgroundColor: "yellow"}}
            >yellow</button>
        <button 
          onClick={() => setColor("pink")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-black"
            style={{backgroundColor: "pink"}}
            >pink</button>
        <button 
          onClick={() => setColor("purple")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-white"
            style={{backgroundColor: "purple"}}
            >purple</button>
        <button 
          onClick={() => setColor("lavender")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-black"
            style={{backgroundColor: "lavender"}}
            >lavender</button>
        <button 
          onClick={() => setColor("white")}
            className="px-4 py-1 outline-none shadow-md rounded-lg text-black"
            style={{backgroundColor: "white"}}
            >white</button>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App
