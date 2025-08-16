import React, { useReducer } from 'react'
let initialstate=0
function Counter() {
    const[state,dispatch]=useReducer(reducer,initialstate)
    function reducer(state,action){
       
        switch(action.type){
            case "increment":if(state<=1000)
                return state+1
                
            case "decrement":if(state>0)
               return state-1
        
        return state
        }        
    }
  return (
    <div>
        <h1>Counter {state}</h1>
      <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
      <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
    </div>
  )
}

export default Counter
