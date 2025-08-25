import { useState } from 'react'

import './App.css'
import Card from './Card'
import Card1 from './Card1'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <Card name={name} setName={setName}/>
      <Card1 name={name} setName={setName}/>
    </>
  )
}

export default App
