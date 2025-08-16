import axios from "axios";
import React, { useState } from "react";

function Postdata() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  function adddata(e) {
    e.preventDefault();
    let user = { name, phone, email, city };
    // fetch(
    //   "http://localhost:3000/employess",

    //   {
    //     method: "post",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   }
    // ).then((res1) => {
    //   res1.json().then((res2) => {
    //     console.log(res2);
    //   });
    // });

    axios.post("http://localhost:3000/employess",JSON.stringify(user)).then((res1)=>{
      console.log(res1);
      
    })
  }
  return (
    <div>
      <h1>Add New Data</h1>
      <form onSubmit={adddata}>
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
        <button type="Submit">Add Data</button>
      </form>
    </div>
  );
}

export default Postdata;
