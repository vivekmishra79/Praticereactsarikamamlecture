import React from 'react'
import { Info } from './App'
import { useContext } from 'react'

function Child3() {
    const user=useContext(Info)
  return (
    <div>
      <h1>This is Child 3{user.name}</h1>
    </div>
  )
}

export default Child3
