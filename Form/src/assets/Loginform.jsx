import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Loginform() {
    const[uname,setUname]=useState("")
    const[password,setPassword]=useState("")

    function login(e){
       e.preventDefault()
       if(!uname){
        alert("please enter usename")
      }
      else if(uname.length<4||uname.length>10){
        alert("must be  4 to 10")
      }
      
      else if(!isNaN(uname)){
        alert("number not allowed")
      }
       else{
        alert("login successfull!")
       }
    }

    

    
  return (
    <div>
      <Form onSubmit={login}>
      <Form.Group className="my-3 w-50 form-control bg-dark text-white"controlId="formBasicEmail">
        <Form.Label >User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" value={uname} onChange={(e)=>{setUname(e.target.value)}} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-50 form-control bg-dark text-white" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Loginform
