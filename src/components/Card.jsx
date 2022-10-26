import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

const Card = () => {

 const [user,setUser]= useState({});
 const [indexUser,setIndexUser]= useState(false)
 
 const changeUser = ()=>{
  setIndexUser( !indexUser)
  
 }
 

useEffect(()=>{
axios
.get("https://randomuser.me/api/")
.then((res)=>setUser(res.data.results[0]))
},[indexUser]);



 return (
  <div className="container">
   <div className='card'>
    <h1>{user.name?.title} {user.name?.first} {user.name?.last}</h1>
    <img src={user.picture?.medium} alt="" />
    <p>
     <b>Email</b> {user.email}
    </p>
    <button onClick={changeUser}>
     <i class="fa-solid fa-caret-right">
    </i></button>
   </div>
  </div>
  
 );
};

export default Card;