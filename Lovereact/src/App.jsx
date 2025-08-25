

import './App.css'
import Navbar from './Navbar'

function App() {
  

  return (
      <div className='Container1'>
        <Navbar name={"Vivek"} des={"This is vivek i am cool guy"} style={{"border-radius":"15px"}}/>
        <Navbar name={"Sumit"} des={"I am sumit very cool"}/>
        <Navbar name={"Rahul"} des={"I am Rahul very cool"}/>
        <Navbar name={"Sahil"}des={"I am  Sahil very cool"}/>

      </div>
  )
}

export default App
