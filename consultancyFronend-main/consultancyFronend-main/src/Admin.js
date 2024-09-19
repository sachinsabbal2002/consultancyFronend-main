import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserF from './components/UserF'
import QrImg from './imge/QR_code.png';
const Admin = () => {
    const [dipSt,setdipst]=useState('none')
    const [formdip,setformdis]=useState('inline')
    let navigate=useNavigate()
    const [admin,setadmin]=useState({email:"",password:""})
    const onChange = (e) => {
        setadmin({ ...admin, [e.target.name]: e.target.value });
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle sumit is call ")
    if(admin.email=='1508ramashish@gmail.com' && admin.password=='12345678'){
        console.log("Admin login success");
        alert("login successs")
        
        setformdis('none')
        setdipst('inline')
    }
    else {
        console.log("admin fail")
        alert("invalid cretential")
    }
}
   
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:formdip}}>
           <h3>Email</h3>
           <input type='email'  value={admin.email}  onChange={onChange} className="form-control" name="email"></input>
           <h4>password</h4>
           <input type='text' value={admin.password}  onChange={onChange} className="form-control" name="password" ></input>
           <button type ="submit" style={{border:'solid 3px',borderRadius:'4px',background:'green',marginLeft:'7px'}}>Submit</button>
        </form>
        <div className='container' style={{display:dipSt}}>
        < UserF/>
        </div>
       
       <br></br>
       <br></br>
        <div >
          <img className='imgfluid' height="120" width="150" src={QrImg}  />
        </div>
        <br></br>
    </div>
  )
}
export default Admin;
