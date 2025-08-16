import React from 'react'
import { useContext } from 'react'
import { Info } from '../App'


function Firstchild() {
    const{tcolor,bcolor}=useContext(Info)
  return (
    <div>
      <h3 style={{color:tcolor}}>First Child Component</h3>
      <h2 style={{color:bcolor, backgroundColor:tcolor} }>Bluecolor</h2>
      
    </div>
    
  )
}

export default Firstchild
