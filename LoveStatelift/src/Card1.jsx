import React from 'react'

function Card1(props) {
  return (
    <div>
      <input type="text" onChange={(e)=>{props.setName(e.target.value)}} />
      <p>THis is card 2:{props.name}</p>
    </div>
  )
}

export default Card1
