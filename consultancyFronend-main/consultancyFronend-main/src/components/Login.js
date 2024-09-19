import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

 function Login (props) {
  const [formdis,setformdis]=useState('block')
  const [dataf,datafatch]=useState(false);
  const [data,setdata]=useState([{name:"rama",id:1},{name:"ashis",id:2},{name:"thak",id:3}])
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history =  useNavigate();
  
 var rdata=[]
// useEffect(()=>{
// setdata(rdata)
// },[dataf]
// )
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle sumit is call ")
    const response = await fetch("https://taxconsultancy.vercel.app/admin", {
        // const response = await fetch("http://localhost:3000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "authtoken":"pasteauthtoken here"
      },
      // creadentail me ui se data ko fill kar liya gaya hai isliye ham body me email,password credential se le sakte hai
    //   body me data lene ka tarika
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
 
    // fetch() se jo respone mila hai use json me convert karta hau  
     rdata = await response.json();
   
    if(rdata.success==="false"){
      
      alert("Bad cretential try with correct one ")
    }
    else{
     datafatch(true);
      setformdis('none');
      console.log(rdata)
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{marginTop:'24px',marginBottom:'45px',display:formdis}} className="container">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    <div>
      {
        dataf ? data.map(item=>(
          <li key={item.id}>{item.name}</li>
        )):<h1>No data is present </h1>
      }
    </div>
    </div>
  );
}
export default Login;