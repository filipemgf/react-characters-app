import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, NavLink, Link } from 'react-router-dom';

import CharacterDetails from "./components/CharacterDetails"
import AboutPage from "./pages/AboutPage"

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


  const renderListOfCharacters = () => {
    if(charactersArr === null){
      return <p>loading....</p>;
    } else {
      return charactersArr.map((characterObj) => {
        return (
          <div key={characterObj.id} className="character box">
            Name: {characterObj.name} <br />
            Weapon: {characterObj.weapon} <br />
            <Link to={`/characters/${characterObj.id}`}>More details</Link>
          </div>
        )
      })
    }
  }

  return (
    <div className="App">
      <h1>React Charates App</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={renderListOfCharacters()} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<p>Display Contact page</p>} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>


    </div>
  );
}

export default App;
