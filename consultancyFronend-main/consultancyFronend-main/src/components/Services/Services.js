
import React, {useEffect} from "react";
import typeimg from "./types.jpg";

const Services = ({setProgress}) => {
//   useEffect(
//     ()=>{
// setProgress(40);
// setTimeout(()=>{
//   setProgress(100)
// },1000)
//     },[]
//   )
  return (
    <div>
      <div className="itrfill" style={{ border: "solid 2px" }}>
       
        <div className="typeMain">
          <h3 style={{ textAlign: "center" }}>Which ITR to file? {"   "}     
          <a href="#" style={{ border: "3px solid", borderRadius: "5px",backgroundColor:'goldenrod' }}>
            Fill ITR
          </a>
        </h3>
          <div className="imgtype">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  width: "700px",
                  border: "solid 3px",
                  height: "750px",
                }}
                src={typeimg}
              />
            </div>
          </div>
          <div className="grid" style={{ margin: "30px" }}>
            <div
              className="1"
              style={{
                width: "80vw",
                height: "5cm",
                border: "solid 2px",
                margin: "2px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>ITR-1</h3>{" "}
              <p> * Income below 50 lakh</p> <p>* salary Person</p>{" "}
              <p>* Other House Property</p>
            </div>
            <div
              className="2"
              style={{
                width: "80vw",
                height: "5cm",
                border: "solid 2px",
                margin: "2px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>ITR-3</h3>{" "}
              <p> * Income above 50 lakh</p> <p>* business/profession</p>{" "}
              <p>* Crypto Income</p>
            </div>
            <div
              className="3"
              style={{
                width: "80vw",
                height: "5cm",
                border: "solid 2px",
                margin: "2px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>ITR-1</h3>{" "}
              <p> * Income below 50 lakh</p> <p>* salary Person</p>{" "}
              <p>* Other House Property</p>
            </div>
            <div
              className="4"
              style={{
                width: "80vw",
                height: "5cm",
                border: "solid 2px",
                margin: "2px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>ITR-4</h3>{" "}
              <p> * HUFs having income below 50L</p> <p>* salary Person</p>{" "}
              <p>* Presumptive Income</p>
            </div>
            <div
              className="5"
              style={{
                width: "80vw",
                height: "5cm",
                border: "solid 2px",
                margin: "2px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>ITR-5</h3>{" "}
              <p>
                <strong>* Apllicable to</strong>
              </p>{" "}
              <p>* Firms/LLPs</p> <p>* AOPs/BOIs</p>
            </div>
          </div>
        </div>
        <h4 style={{textAlign:'center', margin:'8px' ,padding:'3px'}}><a href='#' style={{border:'3px solid', borderRadius:'5px'}}>Fill ITR</a></h4>
      </div>
    </div>
  );
};

export default Services;
