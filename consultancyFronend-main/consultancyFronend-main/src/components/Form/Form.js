import React, { useState } from 'react'
import './FormStyle.css'

import { useNavigate } from "react-router-dom";
// import dotenv from 'dotenv';
// dotenv.config();

const Form = (props) => {
  // const Backlink=process.env.BACKEND
  const [btnclr,setbtnclr]=useState('green')
  let history =  useNavigate();
  const [credentials,setCredentails]=useState({name:"",email:"",phone:"",state:""})
  const onChange = (e) => {
    setCredentails({ ...credentials, [e.target.name]: e.target.value });
  }
  // fun
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle sumit is call ")
setbtnclr('red')
//bad request sue to same email is present 
// const response=await fetch('http://localhost:3000/contact', {
      const response = await fetch('https://taxconsultancy.vercel.app/contact', {  // vercel vala backend
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "authtoken":"pasteauthtoken here"
      },
      // creadentail me ui se data ko fill kar liya gaya hai isliye ham body me email,password credential se le sakte hai
    //   body me data lene ka tarika
      body: JSON.stringify({
        email: credentials.email,
        name: credentials.name,
        phone:credentials.phone,
        state:credentials.state
      }),
    });
    // fetch() se jo respone mila hai use json me convert karta hau 
    const json = await response.json();
    if (json.success) {
      // Save the authtoken in localStroge
      // setItem is predefine function
  
      // history ab "/" route par chala jaega automatically (yani ki login karne ke baad home par chala jaega )
      history('/') 
      alert("Your response is submit successfully , We will get you soon")
    //   props.showAlert("sucessfully ","success")
    //   history("/");both syntex is valid 
    } else {
        // props.showAlert("invalide credential","denger")
        alert("email already exist")
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center', gap:'5px'}}>
        <h3>Get a free Consultation</h3>
        <h2 >Talk to an Advisor Now</h2>
        <form onSubmit={handleSubmit}>
           <h6>Name</h6>
           <input type='text'  value={credentials.name}  onChange={onChange} className="form-control" name="name"></input>
           <h6>Phone Number</h6>
           <input type='number'  value={credentials.phone}  onChange={onChange} className="form-control" name="phone"></input>
           <h6>Email</h6>
           <input type='email'  value={credentials.email}  onChange={onChange} className="form-control" name="email"></input>
           <h6>state</h6>
           <input type='text' value={credentials.state}  onChange={onChange} className="form-control" name="state" ></input>
           <button type ="submit" style={{border:'solid 3px',borderRadius:'4px',background:btnclr,marginLeft:'7px'}}>Submit</button>
        </form>
      
    </div>
  ) 
}

export default Form
