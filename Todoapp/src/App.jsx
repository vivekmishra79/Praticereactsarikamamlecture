import { useState } from 'react'

import './App.css'
import Inputbox from './assets/Inputbox'
import Tododisplay from './Tododisplay';

function App() {
  const [todolist, setTodolist] = useState([])
  function Addtodolist(inputtext)
  {
    console.log(inputtext);
    
   setTodolist([...todolist,inputtext])
  }

  function Deletetodo(){
    
  }
  return (
    <>
      <h1>Todo App</h1>
      <Inputbox Addtodolist={Addtodolist}/>
      {
      todolist.map((val,index)=>{
        return (
             <Tododisplay key={index} item={val}/>
        )
      })
      }
    </>
  )
}

export default App
