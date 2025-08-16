import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import axios, { Axios } from "axios"

function Getdata() {
  const [emps, setEmps] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState(null);

  function display(val) {
    setName(val.name);
    setEmail(val.email);
    setPhone(val.phone);
    setCity(val.city);
    setId(val.id);
  }
  function delemp(id){
     
   
    // fetch(
    //   `http://localhost:3000/employess/${id}`,

    //   {
    //     method: "delete",
        
        
    //   }
    // ).then((res1) => {
    //   res1.json().then((res2) => {
    //     console.log(res2);
    //     getemp();
    //   });
    // });

    axios.delete(`http://localhost:3000/employess/${id}`).then((res)=>{
      console.log(res);
      getemp()
      
    })

  }
  function getemp() {
    // fetch("http://localhost:3000/employess").then((res1) => {
    //   res1.json().then((res2) => {
    //     console.log(res2);
    //     setEmps(res2);
    //   });
    // });

    let empdata=axios.get("http://localhost:3000/employess").then((res)=>{
      console.log(res);
      setEmps(res.data)
      
    })
  }

  function handleupdate(e) {
    e.preventDefault();
    let user = { id, name, city, email, phone };
    // fetch(
    //   `http://localhost:3000/employess/${user.id}`,

    //   {
    //     method: "put",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   }
    // ).then((res1) => {
    //   res1.json().then((res2) => {
    //     console.log(res2);
    //     getemp();
    //   });
    // });

    axios.put(`http://localhost:3000/employess/${user.id}`,JSON.stringify(user)).then((res)=>{
      console.log(res);
      getemp()

    })
  }

  useEffect(() => {
    getemp();
  }, []);
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>CITY</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.id}</td>
                <td>{val.name}</td>

                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.city}</td>
                <td>
                  <button
                    onClick={() => {
                      display(val);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={()=>delemp(val.id)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <h1>Upadte data</h1>
        <form onSubmit={handleupdate}>
          <input
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br /> <br />
          <input
            type="email"
            placeholder="Enter Email Adress"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Enter the phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br /> <br />
          <button type="submit">Edit Data</button>
        </form>
      </div>
    </div>
  );
}

export default Getdata;
