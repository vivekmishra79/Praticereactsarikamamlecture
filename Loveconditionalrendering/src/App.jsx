import { useState } from 'react'

import './App.css'
import Logout from './Logout'
import Login from './login'

function App() {
  const [isloggedin, setLoggedin] = useState(false)

//  if(isloggedin){
//   return(
//     <Logout/>
//   )
//  }
//  else{
//   return(
//     <Login/>
//   )
//  }

  return (
    <>

    {isloggedin ? <Logout/> : <Login/>}
    
      
    </>
  )
}

export default App
