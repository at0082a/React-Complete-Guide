import React from "react";
import './output.css'

const userOutput = (props) => {
  return (
    <div className='output'>
      <p> User: {props.username} </p>
      <p> My Cup Runneth Over </p>
      <p> AC Milan and Toronto Maple Leafs are the best</p>
    </div>
  )
}

export default userOutput