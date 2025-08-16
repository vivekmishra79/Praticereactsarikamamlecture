import React, { act, useReducer, useState } from 'react'
let initialstate=[{id:new Date(),name:"vivek",city:"pune"}]
function Employee() {
    const[state,dispatch]=useReducer(reducer,initialstate)
    const[name,setName]=useState("")
    const[city,setCity]=useState("")

    function reducer(state,action){
          switch(action.type){
           case "add":
            return [...state,action.payload]

            case "del":
                return state.filter((s)=>{
                    return s.id!==action.payload
                })

            
          }
        return state
    }

    function addemp(e){
        e.preventDefault()
        let emp={id:new Date(),name,city}
        
        
        dispatch({type:"add",payload:emp})
    }

    
  return (
    <div>

        <ul>
            {state.map((val,index)=>{
                return(
                    <li key={index}>{val.name} <span style={{marginLeft:"20px"}}>{val.city}</span>
                        <span style={{marginLeft:"20px"}}><button onClick={()=>dispatch({type:"del",payload:val.id})}> Delete</button></span>
                    
                    <br /> <br />
                     </li> 
                )
            })}
        </ul>
        <form onSubmit={addemp}>
            <h3>Add New Employee</h3>
            <input type="text"placeholder='Enter The Name' value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
            <input type="text"placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}/> <br /><br />
            <button type='submit'>Add Employee</button>
           


        </form>
      
    </div>
  )
}

export default Employee
