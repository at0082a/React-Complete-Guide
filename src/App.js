import React, {useState} from 'react';
import './App.css';
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
    // let newperson = { ...data.persons[findPerson] };
    newPerson.name = event.target.value;
    console.log(newPerson.name);
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
  }

  return (
    <div className="App">
      <h1>Hi I am a react app</h1>
      {/* <button onClick={switchNameHandler}>Switch Name</button> */}
      <button onClick={switchToggle}>Toggle Peeps</button>
      {persons}
    </div>
  );
}

export default App;
