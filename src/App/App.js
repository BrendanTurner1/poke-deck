import './App.css';
import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon';
import Deck from '../Deck/Deck';
import NotFound from '../NotFound/NotFound';

function App() {
  const [deck, setDeck] = useState([])

  const addToDeck = (id) => {
    if(deck.length < 6){
      const deckId = deck.length+1;
      setDeck([...deck, {id: id,
      deckId: deckId}]);
    }
    else {
      alert('Deck is full');
    }
  }

  const removeFromDeck = (deckId) => {
    const updatedDeck = deck.filter((card) => {
      return card.deckId!==deckId
    })

    setDeck(updatedDeck)
  }

  return (
    <main className="App">
      <header>
        <NavLink className='navLink' to='/'>PokéDeck</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<Pokemon addToDeck={addToDeck}/>}></Route>
        <Route path='/deck' element={<Deck deck={deck} removeFromDeck={removeFromDeck}/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
