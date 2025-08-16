import { useState ,createContext} from 'react'

import './App.css'
import Firstchild from './assets/Firstchild'
import Superchild from './assets/Superchild'



export const Info = createContext()

function App() {
  const[tcolor,setTcolor]=useState("purple")
  const[bcolor,setBcolor]=useState("blue")
  const[day,setDay]=useState("Sunday")

  function getday(d){
    console.log(d);
    
    setDay(d)

  }
  return (
    <>
      <h1 style={{color:tcolor}}> Use Contexthook</h1>
      <h2>Today is {day}</h2>
      <Info.Provider value={{tcolor:tcolor,bcolor:bcolor,getday:getday}}>
        <Firstchild />
       
        <Superchild/>
      </Info.Provider>
    </>
  )
}

export default App
