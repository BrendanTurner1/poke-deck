import './Deck.css';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard/PokemonCard';

function Deck({ deck, removeFromDeck }) {


    return (
        <div className='deck-view'>
            <ul className='deck-display'>
                {deck.map((item) => {
                    return (
                    <PokemonCard id={item.id} deckId={item.deckId} onClick={removeFromDeck} key={item.deckId} buttonText={'Remove'}></PokemonCard>)
                })}
            </ul>
            <Link className='Link' to='/' style={{ border: 'solid', borderRadius: '5px', backgroundColor: 'white', textDecoration: 'none', color: 'black', fontSize: '20px'}}>Home</Link>
        </div>
    )
}

export default Deck;