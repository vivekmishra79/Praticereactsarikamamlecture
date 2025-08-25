import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name={"vivek"}>
        <h1>This is card</h1>
        <h2>This is card 2</h2>
        <h3>This is card 3</h3>
      </Card>
    </>
  )
}

export default App
