import { useState } from 'react'
import { Counter } from './Counter.jsx'
import './App.css'
import Courses from './Courses.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux Counter Example</h1>
      <Counter />
      <Courses/>
    </>
  )
}

export default App
