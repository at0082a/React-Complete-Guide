import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input onChange= {props.changeUser} type='text' value={props.username}></input>
    </div>
  )
}

export default userInput