import './PokemonCard.css';
import { useEffect, useState } from "react";
import { pokemonImg, pokemonInfo } from '../ApiCalls/ApiCalls'

export default function PokemonCard({ card, addToDeck }) {
    const [cardInfo, setCardInfo] = useState([]);
    const [cardImg, setCardImg] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        pokemonInfo(card.url)
        .then(data => {
            setCardInfo(data);
            pokemonImg(data.forms[0].url)
                .then(img => {
                    setCardImg(img.sprites.front_default);
                })
                .catch(error => {
                    console.log(error);
                })
        })
        .catch(error => {
            setError(error.message);
        })
    },[card.name])

    const handleButtonClick = () => {
        addToDeck(card)
    }

    return (
       <div className='pokemon-container'>
            <section className='pokemon-card'>
                <h4>{card.name}</h4>
                <img className='pokemon-img' src={cardImg}></img>
                <div className='pokemon-info'>
                    <p>Move set here</p>
                    <p>Move 2</p>
                </div>
                <button onClick={handleButtonClick}>Add to Deck</button>
            </section>
       </div>
    )
}