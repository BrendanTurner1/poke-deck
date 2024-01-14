import './DeckPokemon.css';

export default function DeckPokemon({ card, removeFromDeck, id }) {
    
    const handleButtonClick = () => {removeFromDeck(id)}

    return (
        <div className='deck-container'>
        <section className='deck-card'>
            <h4>{card.name}</h4>
            <img className='deck-img' src={card.img}></img>
            <div className='deck-info'>
                    {card.types.map((type, index) => {
                        return (<p key={index}>
                            {type.type.name}
                        </p>)
                    })}
                </div>
            <button onClick={handleButtonClick}>Remove</button>
        </section>
   </div>
    )
}