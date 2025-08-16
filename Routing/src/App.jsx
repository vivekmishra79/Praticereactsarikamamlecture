import { useState } from 'react'
import About from './About'
import Home from './Home'
import Profile from './Profile'
import Contact from './Contact.jsx'
import './App.css'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/aboutus">About-us</Link>
    <Link to="/Contact">Contact-us</Link>
    <Link to="/profile">profile</Link>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/profile' element={<Profile/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
