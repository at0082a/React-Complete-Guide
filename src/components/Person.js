import React from "react";
import './Person.css';


const person = props => {
  return (
    <div className="person">
      {/* <button>Switch Name</button> */}
      <p> I'm {props.name} and I'm {props.age} years old </p>
      <p> {props.children} </p>
    </div>
  )
}

export default person