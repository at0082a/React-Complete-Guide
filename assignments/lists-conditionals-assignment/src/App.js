import React, { useState } from 'react';
import ValidationComp from './components/ValidationComponent';
import CharComp from './components/CharComponent';
import './App.css';

function App() {
    const [textLength, setTextLength] = useState(null);
    const [letters, setLetters] = useState([]);
    
    const textChange = (event) => {
      let changed = textLength;
      changed = event.target.value.length;
      setTextLength(changed);
    };

    const deleteLetter = (index) => {
      let stuff = [...letters];
      stuff.splice(index, 1);
      setLetters(stuff)
    };

    const listLetters = (event) => {
      let arr = event.target.value.split('');
      setLetters(arr);
    };

    let letterz = (
      <div>
          { letters.map((letter, index) =>  {
            return <CharComp 
              key={index}
              letter={letter}
              delete={() => deleteLetter(index)}
              />
            }) 
          }
        </div>
    )

    return (
      <div className="App">
        < input onChange={ (event) => textChange(event) } type="text" />
        < input onChange={ (event) => listLetters(event) } type="text" />
        <ValidationComp length={textLength} />
        {letterz}
      </div>
    );
  }


export default App;
