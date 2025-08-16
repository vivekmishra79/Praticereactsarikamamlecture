import React from 'react'

import { useContext } from 'react'
import { Info } from '../App'
function Superchild() {
  const{getday}=useContext(Info)
  let today = new Date();
  let dayName = today.toLocaleDateString('en-US', { weekday: 'long' });


  return (
    <div>
      <h2>Super Child</h2>
      
      <button onClick={()=>getday(dayName)}>Change day</button>
    </div>
  )
}

export default Superchild
