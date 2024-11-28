import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiActionAreaCard from './components/Card'

function App() {
  const myObj={
    username:"piyush",
    btnText:"visit"
  }

  return (
    <>
      <h1 className='bg-blue-900 rounded-lg text-center w-96 flex items-center justify-center'>React with vite</h1>
      <MultiActionAreaCard username="Ayush" btnText="click me" />
      <MultiActionAreaCard  username={"Piyush"} btnText="visit" />  {/* to pass object,array as props: obj= {myObj}*/ }
      <MultiActionAreaCard username="Prachi" />
        
    </>
  )
}

export default App
