import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const baseURL = "https://ih-crud-api.herokuapp.com";

  const [charactersArr, setCharactersArr] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/characters`)
      .then( response => {
        setCharactersArr(response.data);
      })
      .catch( e => console.log(e))
  }, []);


  return (
    <div className="App">
      <h1>React Charates App</h1>

      {
        charactersArr === null 
        ? "loading...."
        : <h2>Number of characters in the API: {charactersArr.length}</h2>
      }

      {charactersArr && charactersArr.map((characterObj) => {
        return(
          <div key={characterObj.id} className="character box">
            Name: {characterObj.name} <br />
            Weapon: {characterObj.weapon}
          </div>
        )
      })}


    </div>
  );
}

export default App;
