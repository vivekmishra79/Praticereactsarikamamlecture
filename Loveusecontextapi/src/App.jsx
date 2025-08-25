import { useState } from 'react'

import Child1 from './Child1'

import './App.css'

import { useContext } from 'react'
import { createContext } from 'react'

const Info= createContext()

function App() {
  
  const [count, setCount] = useState({name:"vivek"})

  return (
    <div>
      <Info.Provider value={count} >
      <Child1/>
      </Info.Provider>
    </div>
    
  )
}

export default App

export {Info}



