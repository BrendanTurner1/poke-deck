import DeckPokemon from '../DeckPokemon/DeckPokemon';
import './Deck.css';

function Deck({ deck, removeFromDeck }) {


    return (
        <div className='deck-view'>
            <ul>
                {deck.map((card, index) => {
                    return (
                    <DeckPokemon card={card} removeFromDeck={removeFromDeck} key={index} id={index}></DeckPokemon>)
                })}
            </ul>
        </div>
    )
}

export default Deck