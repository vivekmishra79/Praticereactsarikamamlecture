import React from 'react'

function Card(props) {
  return (
    <div>
      <input type="text" onChange={(e)=>{props.setName(e.target.value)}}/>
      <p>This is Card {props.name}</p>
    </div>
  )
}

export default Card
