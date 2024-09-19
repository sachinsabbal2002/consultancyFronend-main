import React, { useContext, useEffect } from "react";
import Home from "../Home/Home";
import { Link, useLocation } from "react-router-dom";
import "./NabbarSty.css";
import Usercontext from "../context/Usercontext";
import Useritem from "../Useritem";
function Navbar() {
 
 
   // LOCATION hook used
   let loct=useLocation();
  // useEffect(()=>{
  //   // console.log("location is ", loct)
  //  },[loct])
  return (
    // new navbar
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'gray'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{fontSize:'25px'}}>
          E'Tax-Consultancy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={{fontSize:'18px'}} className={`nav-link ${loct.pathname==="/about"? "active": ""}`} aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{fontSize:'18px'}} className={`nav-link ${loct.pathname==="/itr"? "active": ""}`} to="/itr">
                  ITR
                </Link>
              </li>
              <li className="nav-item">
                <Link  style={{fontSize:'18px'}} className={`nav-link ${loct.pathname==="/gst"? "active": ""}`} to="/gst">
                  GST
                </Link>
              </li>
              <li className="nav-item">
                <Link  style={{fontSize:'18px'}} className={`nav-link ${loct.pathname==="/contact"? "active": ""}`} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a style={{fontSize:'18px'}}
                  // className="nav-link dropdown-toggle"
                  className={`nav-link ${loct.pathname==="/itr"? "active": ""} dropdown-toggle`}
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      GST Registration
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Income Tax Return
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      TDS Returns
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Tax Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Compliance Audit
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Book keeping
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                    Corparate Registration
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                    All others Accounting Service
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link  style={{fontSize:'18px'}} className={`nav-link ${loct.pathname==="/adminlogin"? "active": ""}`} to="/adminlogin">
                  Admin
                </Link>
              </li>
            </ul>
          </div> 

        </div>
       
      </nav>
     
    </div>
  );
}

export default Navbar;
