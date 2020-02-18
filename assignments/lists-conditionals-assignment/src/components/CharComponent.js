import React from 'react';

const char = (props) => {
  const style = {
    display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center', 
    margin: '16px', 
    border: '1px solid black'
  };
  return (
    <div style={style}>
      <p> {props.letter} </p>
      <button onClick={props.delete}> Delete Me </button>
    </div>
  )
}

export default char;