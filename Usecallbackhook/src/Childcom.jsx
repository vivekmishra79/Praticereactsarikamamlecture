import React, { memo } from 'react'

function Childcom({qnt,setQnt,display}) {
    console.log("child component called");
    
  return (
    <div>
      <h1>Child Component </h1>
      <h2>Quantity : {qnt}</h2>
    <button onClick={()=>{setQnt(qnt*2)}}>+</button>
    </div>
  )
}

export default memo(Childcom)
