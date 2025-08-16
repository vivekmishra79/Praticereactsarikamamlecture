import React, { Component } from 'react'

export default class Empdata extends Component {
    constructor(){
        super()
        this.state={
            emp:[{id:1,name:"vivek",age:23,phone:7974912874},
                {id:2,name:"rahul",age:22,phone:85647698478},
                {id:3,name:"sani",age:20,phone:858478},
                {id:4,name:"sujett",age:28,phone:85647478},
                {id:5,name:"prince",age:2,phone:8564768478},

            ]
        }
    }
  render() {
    return (
      <>
      <h1>Emp data</h1>
      <table border={2} align='center'>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>PhoneNumber</th>
            </tr>
        </thead>
        <tbody>
           {this.state.emp.map((val,index)=>{
               return(
                <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.phone}</td>
                </tr>
               )
           })}
        </tbody>

       
        
      </table>
      </>
    )
  }
}
