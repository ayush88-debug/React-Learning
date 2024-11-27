import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Executed MyAPP</h1>
  )
}

// const reactElement={  //this is how component which is returned are converted into this
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children:"click me to visit google"
// }


const anotherElement=(
  <a href="https://google.com" target='_blank'>Google.com</a>
)

const anotherName="Ayush"
const reactElement= React.createElement(
  "a",
  {href:"https://google.com", target: "_blank"},
  "Click to visit Google",
  anotherName
)

createRoot(document.getElementById('root')).render(
  // <MyApp/>
  // MyApp()
  // anotherElement

  /*(
    <a href="https://google.com">Google.com</a>
  )*/

    reactElement
)
