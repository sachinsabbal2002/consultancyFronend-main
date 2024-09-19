import Usercontext from "./Usercontext";
import { useEffect, useState } from "react";
import React from 'react'
import { json } from "react-router-dom";

const Userstate = (props) => {
  const intialuser=[];
    const [user,setuser]=useState(intialuser);
    const bhost="https://taxconsultancy.vercel.app/admin"
    // useEffect(()=>{
    const getuser=async ()=>{
    const response = await  fetch(`${bhost}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        //   "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0. hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
        }
      });
      const json= await response.json();
      setuser(json)
      console.log("inside getuser fun",user)
    }
  // },[])
    // console.log("userstate",user)
  return (
    <Usercontext.Provider value={{user,getuser}}>
      {props.children}
    </Usercontext.Provider>
  )
}

export default Userstate;
