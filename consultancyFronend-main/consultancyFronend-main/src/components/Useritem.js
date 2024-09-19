import React from 'react'

const Useritem = (props) => {
    const {useri}=props
  return (
    
    <div className="card container my-3 " style={{width: "18rem"}}>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Name: {useri.name}</li>
      <li className="list-group-item">Email:{useri.email}</li>
      <li className="list-group-item">Phone:{useri.phone}</li>
      <li className="list-group-item">State:{useri.state}</li>
    </ul>
  </div>
  
  )
}

export default Useritem
