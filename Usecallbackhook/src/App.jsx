import { useCallback, useState } from 'react'

import './App.css'
import Childcom from './Childcom'

function App() {
  const [count, setCount] = useState(0)
  const[qnt,setQnt]=useState(5)
  let item=4
  const display=useCallback(()=>{
    console.log("function called");
    
  },[])
  return (
    <>
      <h1>UseCallbackhook</h1>
      <h2>Counter: {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <Childcom qnt={qnt} setQnt={setQnt} display={display}/>
    </>
  )
}

export default App
