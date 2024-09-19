

import React, {useEffect,useContext} from 'react'
import Usercontext from './context/Usercontext';
import Useritem from './Useritem';
const UserF = () => {
    const context=useContext(Usercontext);
    const {user,getuser}=context;
    useEffect(()=>{
    getuser();
    },[])
  return (
    <div>
       <div className="row my-3">
                <h2>You users</h2>
                <div className="container mx-2"> 
                {user.length===0 && 'No user to display'}
                </div>
                {user.map((useri) => {
                    return <Useritem key={useri._id} useri={useri} />
                })}
            </div>
    </div>
  )
}

export default UserF
