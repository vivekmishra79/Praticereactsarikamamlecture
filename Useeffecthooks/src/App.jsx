
import { useEffect, useState } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const[count,setCount]=useState(0)
  const[qnt,seQnt]=useState(5)
 
  useEffect(()=>{
    console.log("component called");
    
  },[count])

  return (
    <>
      <h1> UseEffect Hook</h1>
      <h3>Counter{count}</h3>
      <button onClick={()=>setCount(count+1)}>+</button>
      <Child qnt={qnt} seQnt={seQnt}/>

    </>
  )
}

export default App
