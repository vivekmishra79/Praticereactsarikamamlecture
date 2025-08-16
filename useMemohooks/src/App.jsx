import { useState } from 'react'

import './App.css'
import { use } from 'react'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const[qty,setQty]=useState(2)

  useMemo(()=>{
    console.log("component called");
    
  },[count])

  return (
    <>
      <h1>Use Memohook</h1>
      <h2>Counter : {count}</h2>
      <h2>Quantity : {qty}</h2>
      <button style={{color:"blue" ,fontSize:"30px",fontFamily:"sans-serif",fontWeight:"bolder",width:"200px"}}  onClick={()=>{setCount(count+1)}}>Change count</button>
      <button  style={{color:"blue" ,fontSize:"30px",fontFamily:"sans-serif",fontWeight:"bolder",width:"200px"}} onClick={()=>{setQty(qty*2)}}>Change Quantity</button>
    </>
  )
}

export default App
