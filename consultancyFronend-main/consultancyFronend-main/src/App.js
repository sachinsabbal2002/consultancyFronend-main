import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ITr from "./components/ITR/ITr";
import Navbar from "./components/Navbar/Navbar";
import NewGST from "./components/GST/NewGST";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
// import Usercontext from "./components/context/Usercontext";
import Userstate from "./components/context/Userstate";
import Admin from "./Admin";
// import Alert from "./components/Alert";
function App() {
  const [progress, setProgress] = useState(0);
  const [alertstatus,setalertstatus]=useState('inline')
  const [credentials,setCredentails]=useState({name:"",phone:""})
  const alerthandle=()=>{
    setalertstatus('none');
    setTimeout(()=>{
      setalertstatus('inline')
    },30000);
  }
  const onChange = (e) => {
    setCredentails({ ...credentials, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle sumit is call ")
// setbtnclr('red')
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
        email: "query@.com",
        name: credentials.name,
        phone:credentials.phone,
        state:"not provide",
      }),
    });
    // fetch() se jo respone mila hai use json me convert karta hau 
    const json = await response.json();
    if (json.success) {
      // Save the authtoken in localStroge
      // setItem is predefine function
  
      // history ab "/" route par chala jaega automatically (yani ki login karne ke baad home par chala jaega )
      // history('/') 
      setalertstatus('none')
      alert("Your response is submit successfully , We will get you soon")
    //   props.showAlert("sucessfully ","success")
    //   history("/");both syntex is valid 
    } else {
        // props.showAlert("invalide credential","denger")
        alert("email already exist")
    }
  };
  
  return (
    <>
    <Userstate>
      <Router>
        <Navbar />
  <div style={{display:alertstatus,position:'fixed', top:"80px",right:"2px" ,width:'410px'}}>
         <div class="container" role="alert" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'green 5px',backgroundColor:' rgb(29, 27, 28)', borderRadius:'25px'}}>
          <h3 style={{color:'whitesmoke'}}>Call us: +918178569324</h3>
          <button style={{backgroundColor:"gray" ,marginLeft:"4rem"}} onClick={alerthandle}>x</button>
       
        <form onSubmit={handleSubmit}>
           <h6 style={{color:'whitesmoke'}}>Name</h6>
           <input type='text' style={{width:'15em'}} value={credentials.name}  onChange={onChange} className="form-control" name="name"></input>
           <h6 style={{color:'whitesmoke'}}>Phone Number</h6>
           <input type='text' style={{width:'15em'}} value={credentials.phone}  onChange={onChange} className="form-control" name="phone"></input>
          {/* {credentials?<button type ="submit" style={{border:'solid 3px',borderRadius:'4px',marginLeft:'7px'}}>Submit</button>:<button style={{display:'none'}}>submit</button>} */}
           <button type ="submit" style={{border:'solid 3px',borderRadius:'4px',marginLeft:'7px'}}>Submit</button>
         
        </form>
         </div>
  </div>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/itr" element={<ITr setProgress={setProgress} progress={progress} />} />
          <Route path="/gst" element={<NewGST setProgress={setProgress} />} />
          <Route
            path="/contact"
            element={<Contact setProgress={setProgress} />}
          />
          <Route path ="/adminlogin" element={<Admin/>}/>
          <Route path="/about" element={<About setProgress={setProgress} progress={progress} />} />
          <Route
            path="/services"
            element={<Services setProgress={setProgress} />}
          ></Route>
         </Routes>
      </Router>
      <Footer />
      </Userstate>
    </>
  );
}

export default App;
