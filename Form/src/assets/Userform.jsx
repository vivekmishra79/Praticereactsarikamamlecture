import React, { useState } from 'react'

function Userform() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")
    const[radio,setRadio]=useState("")
    const[radio1,setRadio1]=useState("")
    const[chcek1,setcheck1]=useState("")
    const[check2,setcheck2]=useState("")
    const[check3,setcheck3]=useState("")
    const[address,setAddress]=useState("")
    const[state,setState]=useState("")

    function getdata(val){
      val.preventDefault()
      let userdata={name,email,password,radio,radio1,check2,check3,chcek1,address,state,address}
      console.log(userdata);
      

    }
  return (
    <div>
      <h2>Registation Form</h2>
      <form onSubmit={getdata}>
        <input type="text" placeholder='Enter the user-name' value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
        <input type="email"placeholder='Enter the email address' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
        <input type="password"placeholder='Enter the password' value={password} onChange={(e)=>setpassword(e.target.value)}/> <br /><br />
        <label>Gender : </label>
        <input type="radio" name='r1' value={radio} onChange={(e)=>setRadio(e.target.checked)} />Male 
        <input type="radio" name='r1' value={radio1} onChange={(e)=>setRadio1(e.target.checked)}/>Female <br /><br />
        <label>Hobbies : </label>
        <input type="checkbox" value={chcek1} onChange={(e)=>setcheck1(e.target.checked)}/>Coding 
        <input type="checkbox" value={check2} onChange={(e)=>setcheck2(e.target.checked)}/>cricket
        <input type="checkbox"value={check2} onChange={(e)=>setcheck3(e.target.checked)} />Gardening  <br /><br />
        <label>Address:</label><br /><br />
        <textarea rows={5} cols={30} value={address} onChange={(e)=>setAddress(e.target.value)}></textarea><br /><br />
        <label >State:</label> <br /><br />
        <select value={state} onChange={(e)=>setState(e.target.value)}>
            <option>State</option>
            <option>Rewa</option>
            <option>m.p</option>
            <option>pune</option>
            <option>jabalpur</option>
            <option>katni</option>
            <option>Bhopal</option>
        </select> <br /><br />

        <button type='submit'>Submit</button>

    </form>
  
    </div>
  )
}

export default Userform
