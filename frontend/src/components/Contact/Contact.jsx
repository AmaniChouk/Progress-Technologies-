import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Footer from '../Footer/Footer'

import {userState,userEffect} from 'react'


const Contact = () => {
  
  const [message, setMessage] = useState("");
  const [data, setdata] = useState([]);
  const [enames,setnames]=useState([]);

  const  refreshList=(event)=>{
      fetch(process.env.REACT_APP_API+'contact')
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
      });
      event.preventDefault();

      if (message.trim().length !== 0) {
        alert('Your message is sent successfully')
      } else {
        alert('Please fill all fields')
      }
  }





 const  createClick= (event)=>{
    fetch(process.env.REACT_APP_API+'contact',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            DepartmentName:"dddd"
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        refreshList();
    },(error)=>{
        alert('Failed');
    })
    event.preventDefault();

      if (message.trim().length !== 0) {
        alert('Your message is sent successfully')
      } else {
        alert('Please fill all fields')
      }
}

  

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  

  const handleClick = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      alert('Your message is sent successfully')
    } else {
      alert('Please fill all fields')
    }
  };
  return (
    <div className="contwal">
      <Navbar />
      <div className="contact">
        <div className="aps">
          <div style={{ paddingTop: "30px" }}>
            <label className="contactla">Name</label>
            <input
              name="firstName"
              className="contactput"
             onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="contactla">
              Email
            </label>
            <input
              className="contactput"
              name="email"
              id="lastName"
             onChange={handleChange}
            />
          </div>
          <div>
            <label className="contactla">Message</label>
            <textarea name="message" id="message" 
           onChange={handleChange} 
            />
          </div>

          <button className="contactbut" 
         onClick={createClick}
         
          >
            SEND
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
