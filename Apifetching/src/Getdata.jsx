import React, { useEffect, useState } from 'react'





function Getdata() {
    const[emps,setEmps]=useState([])
    function getemps(){
       fetch("http://localhost:3000/employees").then((res1)=>{
        res1.json().then((res2)=>{
           console.log(res2);
           setEmps(res2)
           
        })
       })
    }

    useEffect(()=>{
        getemps()
    },[])
  return (
    <div>
      <h1>Get data</h1>
      <table border={2}>
        <thead>
            <tr><th>NAME</th> <th>ID</th> <th>CITY</th> <th>EMAIL</th><th>PHONE NUMBER</th></tr>
        </thead>
        <tbody>
            {
                emps.map((val,index)=>{
                    return(
                        <tr key={index}>
                            <td>{val.name}</td>
                            <td>{val.id}</td>
                            <td>{val.city}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>

      </table>
    </div>
  )
}

export default Getdata
