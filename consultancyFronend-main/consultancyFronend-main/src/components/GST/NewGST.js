import React,{useEffect} from "react";
import Form from "../Form/Form";
import benifit from '../Home/Benefits.png'

const NewGST = ({setProgress}) => {
//   useEffect(
//     ()=>{
// setProgress(40)
// setTimeout(()=>{
//   setProgress(100)
// },2000)
//     },[]
//   )
  
  return (
    <div >
     {/* <div className="container" style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'10px'}}>
      <h4 style={{textAlign:'center' ,color:'red'}}>GST return filling is now available </h4>
      <h2 style={{textAlign:'center',color:'green'}}>Call us 8178569324</h2>
     </div> */}
     <div style={{marginTop:'3vh',backgroundColor:'rgb(36, 36, 44)'}} >
          <h3
            
            style={{ textAlign: "center",color:'royalblue'}}
          >
            Benifit Of tax filling on time
          </h3>
          <div
            className="container d-flex"
            style={{ alignItems: "baseline", justifyContent: "center" }}
          >
            <img className="img-fluid" src={benifit}></img>
          </div>
        </div>
        <br></br>
        {/* Overview SECTION START */}
     <diV className="container" style={{padding:'10px'}}>
      <h4  style={{textAlign:'center',color:'yellow'}}>Gst Return Filling -Overview</h4>
      <p style={{fontSize:'20px',marginTop:'1vh'}}>
      The Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services in India. Every taxpayer registered under GST has to file GST returns. These returns are used to calculate the tax liability by the government. GST is an evolving system of taxation and the government keeps updating the rules and regulations around it. So, it is important to stay up-to-date to be able to file your returns correctly. Our GST return filing service helps taxpayers to get it done easily. Our professionals will take care of the filings so you don’t have to worry about keeping up with the due dates and staying GST compliant. 
      </p>
     </diV>
     <div className="container" style={{padding:'10px'}}>
      <h2 style={{textAlign:'center' ,color:'green'}}>Prerequisite</h2>
      <p style={{padding:'5px',fontSize:'20px'}}>
      In the GST norms, any regular business has to file three monthly returns and one annual return
      </p>
      <p style={{padding:'2px' , fontSize:'20px'}}>GST should also be filed by entities that make no sales or purchases during a given period (year) in the form of nil-returns (meaning no returns).</p>
      <p style={{padding:'2px',fontSize:'20px'}}>The best part in this system one has to manually enter details of one monthly return – GSTR-1. The other two returns – GSTR 2 & 3 will get auto-populated by deriving information from GSTR-1 filed by you and your vendors. Compounding taxpayers have to file returns quarterly which is for every three months and regular taxpayers such as, foreign non-residents, casual taxpayers and Input Service Providers (ISD) have to file returns monthly.</p>
     </div>
     <div>
      <div>
        <h1 style={{textAlign:'center'
        }}>Why should file GST(good and service Tax) ?</h1>
        <div className="container">
          <li style={{fontSize:'3vw'}}>Legal Requirement</li>
          <li style={{fontSize:'3vw'}}>Input Tax Credit (ITC)</li>
          <li style={{fontSize:'3vw'}}>Compliance</li>
          <li style={{fontSize:'3vw'}}>Business Opportunities</li>
          <li style={{fontSize:'3vw'}}>Transparency and Efficiency</li>
        </div>
      </div>
     </div>
    </div>
  );
};
export default NewGST;

