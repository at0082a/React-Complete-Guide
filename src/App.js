import React, {useState} from 'react';
import './App.css';
import Person from "./components/Person"

function App(props) {
  
  const [data, setData] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Steph', age: 23}
    ]
  });

  const switchNameHandler = () => {
    setData({
      persons: [
        {name: 'Maxwell', age: 28},
        {name: 'Manu Ginobili', age: 30},
        {name: 'Steph', age: 23}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi I am a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={data.persons[0].name}
        age={data.persons[0].age}
      />
      <Person
        name={data.persons[1].name}
        age={data.persons[1].age}> My hobbies are: Soccer </Person>
      <Person
        name={data.persons[2].name}
        age={data.persons[2].age}
      />
    </div>
  );
}

export default App;
