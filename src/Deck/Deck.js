import DeckPokemon from '../DeckPokemon/DeckPokemon';
import './Deck.css';
import { Link } from 'react-router-dom';

function Deck({ deck, removeFromDeck }) {


    return (
        <div className='deck-view'>
            <ul className='deck-display'>
                {deck.map((card, index) => {
                    return (
                    <DeckPokemon card={card} removeFromDeck={removeFromDeck} key={index} id={index}></DeckPokemon>)
                })}
            </ul>
            <Link to='/' style={{ border: 'solid', borderRadius: '5px', backgroundColor: 'white', textDecoration: 'none', color: 'black', fontSize: '20px'}}>Home</Link>
        </div>
    )
}

export default Deck;