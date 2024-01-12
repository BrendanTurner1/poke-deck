import './App.css';
import { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon';
import Deck from '../Deck/Deck';
import pokemonCall from '../ApiCalls/ApiCalls'

function App() {
const [pokemon, setPokemon] = useState([]);
const [error, setError] = useState('')

useEffect(() => {
    pokemonCall()
    .then(data => {
        setPokemon(data.results);
    })
    .catch(error => {
        setError(error.message);
        })
}, [])

  return (
    <main className="App">
      <header>
        <NavLink to='/'>PokeDeck</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<Pokemon pokemon={pokemon}/>}></Route>
        <Route path='/deck' element={<Deck/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
