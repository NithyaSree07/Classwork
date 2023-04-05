import React,{useState}from "react";
import { useEffect } from "react";
function Day8() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("Great...This is time to learn HOOKS.... ");
        },5000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}
export default Day8;