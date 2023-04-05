import React from 'react';

function Entry(props) {
  return (
    <div>
      <img src={props.imgUrl}></img>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
       <hr></hr>
    </div>
  );
}


export default Entry;