import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import Persons from './components/Persons';

function App(props) {
  
  const [data, setData] = useState({
    persons:  [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 30},
      {id: 3, name: 'Steph', age: 23}
    ]
  });

  const [toggle, setToggle] = useState(false);

  const switchNameHandler = (event, id) => {

    const findPerson = data.persons.findIndex((person) => {
      return person.id === id;
    });

    let newPerson = { ...data.persons[findPerson] }; 
    newPerson.name = event.target.value;
    data.persons[findPerson] = newPerson;
    setData(prevState => {
      return {...prevState, ...data}
    });
  };

  const StyledButton = styled.button`
    background-color: ${ props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1 px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${ props => props.alt ? 'salmon' : 'lightgreen'},
      color: black
    }
  `;

  const switchToggle = () => {
    setToggle(!toggle);
  };

  const deletePerson = (index) => {
    data.persons.splice(index, 1);
    setData( prevState => {
      return {...prevState, ...data}
    });
  };

  let persons = null;

  if (toggle) {
    persons = (
      <div>
        <Persons
          delete={deletePerson}
          changed={switchNameHandler}
          people={data.persons}
        />
      </div>
    )
  }

  const classes = [];

  if (data.persons.length <= 2) {
    classes.push('red')
  }

  if (data.persons.length <= 1) {
    classes.push('italic')
  }

  return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hi I am a react app</h1>
        <StyledButton alt={toggle} onClick={switchToggle}>
          Toggle Peeps
        </StyledButton>
        {persons}
      </div>
  );
}

export default App;
