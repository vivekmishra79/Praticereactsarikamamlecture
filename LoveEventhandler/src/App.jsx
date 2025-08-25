import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[color,setColor]=useState("white")

  function handlefun(){
    alert("I am clicked")
  }

  function handle(){
    setColor("green")
    
  }

  function handlechange(e){
    console.log(e.target.value);
    
  }

  return (
    <>
      <div>
        <button  onClick={handlefun}></button>
        <p style={{color:color}} onMouseOver={handle}>this is</p>
        <input type="text" onChange={handlechange} />
      </div>
       
    </>
  )
}

export default App
