import './DeckPokemon.css';

export default function DeckPokemon({ card, removeFromDeck, id }) {
    
    const handleButtonClick = () => {removeFromDeck(id)}

    return (
        <div>
            <h1>{card.name}</h1>
            <button onClick={handleButtonClick}>Remove</button>
        </div>
    )
}