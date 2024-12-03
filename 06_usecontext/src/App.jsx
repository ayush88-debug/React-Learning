import { createContext } from 'react'
import ChildA from './components/ChildA'

const userContext=createContext();

function App() {

  const User={
    name:"Ayush",
    email:"ayush@gmail.com"
  }

  return (
    <>
      <userContext.Provider value={User}>
        <ChildA/>
      </userContext.Provider>
    </>
  )
}

export default App
export  {userContext}
