import React ,{useEffect} from "react";
import typeimg from "./types.jpg";
import "./itrc.css";
import { Link } from "react-router-dom";

const ITr = ({setProgress,progress}) => {
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
      <div className="container">
      <h1 style={{textAlign:'center',marginTop:'20px'}}>What is Income Tax Return(ITR)?</h1>
      <p >
        Income Tax Return (ITR) is a form in which the taxpayers file
        information about their income earned and tax applicable, to the income
        tax department.
      </p>
      <p>
        The department has notified 7 various forms i.e. ITR-1, ITR-2, ITR-3,
        ITR-4, ITR-5, ITR-6 & ITR-7 to date. Every taxpayer should file his ITR
        on or before the specified due date. The applicability of ITR forms
        varies depending on the sources of income of the taxpayer, the amount of
        the income earned and the category of the taxpayer like individuals,
        HUF, company, etc.
      </p>
      </div>
      <div className="container" style={{marginTop:'5px'
      }}>
      <h1 style={{textAlign:'center'}}>Why should you file ITR?</h1>
      <li>If you want to claim an income tax refund from the department.</li>
      <li>
        If you have earned from or have invested in foreign assets during the
        FY.
      </li>
      <li>If you wish to apply for a visa or a loan</li>
      <li>
        If the taxpayer is a company or a firm, irrespective of profit or loss.
      </li>
      </div>
      {/* <li>If you have loss from business/profession or under capital gains head, you will not be allowed to carry them forward to the next years unless you file the return before the due date.</li> */}
      <div className="typeMain" style={{backgroundColor:'rgb(44, 31, 39)',marginTop:'2vh'}}>
        <h1 style={{textAlign:'center',marginTop:'10px',color:'blue'}}>Which ITR to file?</h1>
        <div className="imgtype">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "1000px", height: "800px" ,opacity:'0.3', border:'solid 10px', borderRadius:'15px' }}
              src={typeimg}
            />
          </div>
        </div>
        <div className="grid" style={{margin:'30px' }}>
          <div
            className="1"
            style={{ width: "80vw", height: "5cm", border: "solid 2px" ,margin:'2px' }}
          ><h3 style={{textAlign:'center'}}>ITR-1</h3> <p>  * Income below 50 lakh</p> <p>* salary Person</p> <p>* Other House Property</p></div>
          <div
            className="2"
            style={{ width: "80vw", height: "5cm", border: "solid 2px",margin:'2px' }}
          ><h3 style={{textAlign:'center'}}>ITR-3</h3> <p>  * Income above 50 lakh</p> <p>* business/profession</p> <p>* Crypto Income</p></div>
          <div
            className="3"
            style={{ width: "80vw", height: "5cm", border: "solid 2px",margin:'2px' }}
          ><h3 style={{textAlign:'center'}}>ITR-1</h3> <p>  * Income below 50 lakh</p> <p>* salary Person</p> <p>* Other House Property</p></div>
          <div
            className="4"
            style={{ width: "80vw", height: "5cm", border: "solid 2px",margin:'2px' }}
          ><h3 style={{textAlign:'center'}}>ITR-4</h3> <p>  * HUFs having income below 50L</p> <p>* salary Person</p> <p>* Presumptive Income</p></div>
          <div
            className="5"
            style={{ width: "80vw", height: "5cm", border: "solid 2px",margin:'2px' }}
          ><h3 style={{textAlign:'center'}}>ITR-5</h3> <p><strong>* Apllicable to</strong></p> <p>* Firms/LLPs</p> <p>* AOPs/BOIs</p></div>
        </div>
      </div>
      
     <Link to="/contact" style={{textAlign:'center',backgroundColor:'rgb(44, 31, 39)'}}>Proceed to Fill-ITR</Link> 
    </div>
  );
};

export default ITr;
