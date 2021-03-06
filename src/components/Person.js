import React from "react";
import Radium from 'radium';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding: 16px;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {
  return (
    <StyledDiv>
      <p> I'm {props.name} and I'm {props.age} years old </p>
      <input onChange={props.changed} type='text' />
      <button onClick={props.click}> Delete Person </button>
    </StyledDiv>
  )
}

export default Radium(person)