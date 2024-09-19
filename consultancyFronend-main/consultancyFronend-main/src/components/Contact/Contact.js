import React,{useEffect} from "react";
import Form from "../Form/Form";

const Contact = ({setProgress}) => {
//   useEffect(
//     ()=>{
// setProgress(40);
// setTimeout(()=>{
//   setProgress(100)
// },2000)
//     },[]
//   )
  return (
    <>
   <h1 style={{textAlign:'center'}}>Contact_us</h1>
    <div style={{ display: "flex", justifyContent: "center",}}>
      <div className="row contact-form" style={{marginLeft:"15px"}} >
        <div><img
        className="w-100 img-fluid " style={{height:'50vh' ,opacity:'0.2'}}
        src="https://www.onlinetaxfiler.com/assets/front_end2/assets/img/contact/contact-jpg.jpg"
        alt="Img"
      /></div>
         <diV><Form/></diV>
      </div>
    </div>
    </>
  )
};

export default Contact;
