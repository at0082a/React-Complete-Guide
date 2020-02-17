import React, {useState} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from "./components/Person"

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
  
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1 px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  if (toggle) {
    persons = (
      <div>
        {data.persons.map((person, index) => {
          return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={ () => deletePerson(index)}
              changed={ (event) => switchNameHandler(event, person.id)}
            />
          })  
        }
      </div>
    )
    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

  const classes = [];

  if (data.persons.length <= 2) {
    console.log('reddddd')
    classes.push('red')
  }

  if (data.persons.length <= 1) {
    console.log('booolldd')
    classes.push('italic')
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1 className={classes.join(' ')}>Hi I am a react app</h1>
        <button style={style} onClick={switchToggle}>Toggle Peeps</button>
        {persons}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
