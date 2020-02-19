import React from 'react';

const validate = (props) => {
  let result = null;

  if (props.length < 5) {
    result = 'text is too short';
  } else {
    result = 'text is long enough';
  }
  return (
    <div>
      <p> {props.length} </p>
      <p> {result} </p>
    </div>
  )
}

export default validate