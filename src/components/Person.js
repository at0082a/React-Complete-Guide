import React from "react";
import './Person.css';


const person = props => {
  return (
    <div className="person">
      <p> I'm {props.name} and I'm {props.age} years old </p>
      <input onChange={props.changed} type='text' />
      <button onClick={props.click}> Delete Person </button>
    </div>
  )
}

export default person