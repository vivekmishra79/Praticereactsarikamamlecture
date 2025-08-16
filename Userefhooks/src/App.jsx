
import { useRef } from 'react'

function App() {
  const inputref=useRef()
  const imgref=useRef()

  function changecont(){
    inputref.current.value="sevonmentor"
    inputref.current.style.color="red"
    inputref.current.style.fontSize="30px"
  }

  function changeimg(){
    imgref.current.src="https://tse2.mm.bing.net/th/id/OIP.X3jDS9J58Q4ilo4vgjh-RAHaE5?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
    imgref.current.height="200"
    imgref.current.width="200"
  }

  return (
    <>
      <h1>Useref hook</h1>
      <input type="text" placeholder='Enter name' ref={inputref} /> <br /><br />
      <img  src="new.jpg" alt=""  width="200px" ref={imgref} />
      <button  onClick={()=>changecont()} style={{marginLeft:"40px",color:"red"} }>Change Contents</button>
      <button  onClick={()=>changeimg()} style={{marginLeft:"40px",color:"red"} }>Change img</button>

    </>
  )
}

export default App
