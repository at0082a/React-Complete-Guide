import React from 'react';
import Person from './Person';

const personsList = (props) => props.people.map((person, index) => {
    return <Person 
      name={person.name}
      age={person.age}
      click={ () => props.delete(index) }
      changed={ (event) => props.changed(event, person.id) }
    />
  })

export default personsList;