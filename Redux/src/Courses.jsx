import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addcourse } from './CounterSlice'

function Courses() {

    const course=useSelector((state)=>state.counter.courses)
    const dispatch = useDispatch()
    const[name,setName]=useState("")
    const[fees,setFees]=useState("")
    const[duration,setDuration]=useState("")
    
    function addc(e){
        e.preventDefault()
        let c={name,fees,duration}
        dispatch(addcourse(c))

    }


  return (
    <div>

        <table border={2}>
            <thead>
                <tr>
                    <th>Course name</th>
                    <th>course fees</th>
                    <th> course duration</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    course.map((val,index)=>{
                        return(
                            <tr key={index}>
                                <td>{val.name}</td>
                                <td>{val.fees}</td>
                                <td>{val.duration}</td>
                            </tr>
        
                        )
                    })
                }
            </tbody>

        </table>

        <form onSubmit={addc}>
            <h2>Add new course</h2>
            <input type="text"placeholder='enter the name'  value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text"placeholder='enter the fees'value={fees} onChange={(e)=>{setFees(e.target.value)}} />
            <input type="text"placeholder='enter duration' value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>
            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}

export default Courses
