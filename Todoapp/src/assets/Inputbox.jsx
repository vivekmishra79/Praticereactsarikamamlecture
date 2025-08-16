import React, { useState } from 'react'

function Inputbox({Addtodolist}) {
    const[inputtext,setInputtext]=useState("")
  return (
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='Enter your Task !' value={inputtext} onChange={(e)=>{setInputtext(e.target.value)}} />
        <button onClick={()=>{Addtodolist(inputtext)}}>Add task</button>
      
    </div>
  )
}

export default Inputbox
