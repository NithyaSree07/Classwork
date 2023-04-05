import React from "react";

const alertBox=()=>{
    alert('Message from JS Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Go to console");
    myarray.push('u');
    console.log(myarray);
}
function Day1() {
  return (
    <div>
    <br></br><br></br>
    <button onClick={alertBox}>Click Here</button>
    <br></br>
    <button onClick={console_}>Click Here</button>
    <br></br>
    <button onClick={check}>Click Here</button>
    </div>
  )
}
export default Day1;