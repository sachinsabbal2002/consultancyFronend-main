import React, { useEffect } from "react";
import h1 from "./h6.jpg";
import h2 from "./h7.jpg";
import h3 from "./h8.jpg";
import benifit from "./Benefits.png";
import docCollect from './doc collect.jpg'
import NewGST from "../GST/NewGST";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";


function Home({setProgress}) {
  useEffect(
    ()=>{
setProgress(40);
setTimeout(()=>{
  setProgress(100)
},2000)
    },[]
  )
  return (
      <div>
       <div style={{ display:'flex', justifyContent:'center',marginTop:'12px', padding:'5px'}}><span style={{fontSize:'35px',color:'black'}}>Easiest way of e-filling your Income Tax Return in India </span></div>
       <div style={{gap:'50px', display:'flex',flexWrap:'wrap' ,marginTop:'25px' ,justifyContent:'center' }}>
        <div className="freeItr" style={{background:'grey',border:'solid 12px ', borderRadius:'20px'}} >
          <img  style={{width:'9cm' ,height:'5cm' }} src="https://www.taxmanager.in/Images/inner-banner-01.png"/>
         <h2 style={{textAlign:'center' ,width:'9cm'}}>File ITR Yourself</h2>
         <p style={{width:'9cm'}}>Trust us ,you can file your income tax return  on your own Its your own risk of filling  on Govt of india Portal</p>
       <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank">  <button style={{background:'blue' ,border:'solid 2px ', borderRadius:'6px' ,marginLeft:'15px'}}>Fill ITR</button></a>
        </div>
        <div className="paidfile" style={{background:'grey',border:'solid 12px ', borderRadius:'20px'}}> 
        <img style={{width:'9cm' ,height:'5cm'}} src="https://international.catholic.edu/usliving/taxes/tax-photo-1.png"/>
        <h2 style={{textAlign:'center'}}>Get eCA for ITR filling </h2>
        <p>Hire personal,expert  eCA to do income Tax  <br/>filling for you .It is convenient & fast <br/> with maximum refund calculated for you </p>
         <Link to='/contact' style={{border:'solid 2px ',backgroundColor:'purple', width:'4em', borderRadius:'10px' ,marginLeft:'5px'}}>Fill ITR</Link>
        </div>
       </div>
       {/* //steps of filing  */}
       <div style={{backgroundColor:'rgb(86, 86, 86)'}}>
       <h2 style={{textAlign:'center', marginTop:'50px' ,color:'black'}}>Few Simple and  easy steps to fill your tax</h2>
       <div style={{display:'flex', justifyContent:'center',flexWrap:'wrap',gap:'50px' ,marginTop:'5vh'}}>
        <div className="1step" style={{border:'solid 7px grey ', borderRadius:'15px'}}><img style={{width:'200px' ,height:'180px'}} src="https://img.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148189661.jpg?w=740&t=st=1708623501~exp=1708624101~hmac=a20af09e1357521096cc31740aaa6fac738659d84c3c768509cc42499e0a47a6"/> <h3 style={{textAlign:'center'}}>Connect Us &#8594;</h3> </div>
        <div className="2step" style={{border:'solid 7px grey ', borderRadius:'15px'}}><img style={{width:'200px',height:'180px', display:'block'}} src={docCollect} /> <h3 style={{textAlign:'center'}}> document collection &#8594;</h3></div>
        <div className="3step" style={{border:'solid 7px grey ', borderRadius:'15px'}}> <img style={{width:'200px', display:'block',height:'180px'}} src="https://play-lh.googleusercontent.com/BgA6x46ngHdBdEYkY7H0b3h3FlaQ-FI6HJKfaWCUkG8qlHEYLHiHwz4opWVKLGKAfRU=w240-h480-rw" /><h3 style={{textAlign:'center'}}>Payment/Receipt</h3></div>
       </div>
       </div>
       
        <div  style={{marginTop:'20px'}}><NewGST/></div>
        {/* <div style={{marginTop:'120px'}}><About/></div> */}
        {/* <div style={{marginTop:'50px'}}><Contact/></div> */}
        <br></br>
        <br></br>
      </div>
    
  );
}

export default Home;
