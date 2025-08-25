

import { useEffect ,useState} from 'react'
import './App.css'

function App() {

  const[count,setCount]=useState(0)
  const[mount,setMount]=useState(0)

  // useEffect(()=>{
  //   alert("I am render in every time when component render")

  // })
    // useEffect(()=>{
    //     alert("I am render only once ")
    // },[])

    useEffect(()=>{
      alert("i am render when count/mount will be updated")
      return(
         alert("I am cleanup when unmount")
      )
    },[count,mount])

  return (
    <>
      <h1>Use Effect</h1>
      <button onClick={()=>setCount(count+1)}>Click me</button>
      <h1>Counter: {count}</h1>

      <button onClick={()=>{setMount(mount+1)}}>Click mount</button>
      <h1>Counter:{mount}</h1>
    </>
  )
}

export default App
