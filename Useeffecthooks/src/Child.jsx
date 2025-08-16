import React from 'react'

function Child({qnt,seQnt}) {
  return (
    <div>
      <h2>QUantity:{qnt}</h2>
      <button onClick={()=>seQnt(qnt*2)}>Change Quantity</button>
    </div>
  )
}

export default Child
