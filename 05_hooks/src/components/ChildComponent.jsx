import React from 'react'



export default React.memo(function ChildComponent({name, alertFunction}) {  ////React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga 

//if u r sending a function, then react.memo wont be able to save you from re-rendering
    const msg="Child componet is re-rendered"
    console.log(msg)
    alertFunction()
  return (
    <div>
      {name}
    </div>
  )
})


