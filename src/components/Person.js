import React from "react";


const person = props => {
  return (
    <>
      {/* <button>Switch Name</button> */}
      <p> I'm {props.name} and I'm {props.age} years old </p>
      <p>{props.children}</p>
    </>
  )
}

export default person