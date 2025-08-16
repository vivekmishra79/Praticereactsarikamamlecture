import React, { useState } from 'react'

function Postdata() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[city,setCity]=useState("")
    const[phone,setPhone]=useState("")

    function adddata(e){
        e.preventDefault()
        let user={name,email,city,phone}
        fetch("http://localhost:3000/employees",{
            method:"post",
            headers:{
                "content-type":"application/json",

            },
            body:JSON.stringify(user)
        
        }).then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2);

                
            
        })

        })
    }
  return (
    <div>
      <h2>Add new data</h2>
      <form onSubmit={adddata(e)}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
        <input type="email"placeholder='Enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <input type="text" placeholder='Enter your phone number'value={city} onChange={(e)=>setCity(e.target.value)} /> <br /> <br />
        <input type="text" placeholder='Enter your city' value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br /> <br />
        <button type='submit'>Add data</button>
        

      </form>
    </div>
  )
}

export default Postdata
