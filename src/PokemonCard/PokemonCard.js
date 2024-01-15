import './PokemonCard.css';
import { useEffect, useState } from "react";
import { pokemonInfo } from '../ApiCalls/ApiCalls'

export default function PokemonCard({ id, onClick, deckId, buttonText }) {
    const [cardImg, setCardImg] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardTypes, setCardTypes ] = useState([]);
    const [error, setError] = useState("");
    const thisCard = {
        name: cardName,
        img: cardImg,
        types: cardTypes
    }

    useEffect(() => {
        pokemonInfo(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(data => {
            setCardName(data.name);
            setCardTypes(data.types);
            setCardImg(data.sprites.front_default)
        })
        .catch(error => {
            setError(error.message);
        })
    },[cardName])

    const handleButtonClick = () => {
        if(deckId) {
            onClick(deckId)
        }
        else{
            onClick(id)
        }
    }

    return (
       <div className='pokemon-container'>
            <section className='pokemon-card'>
                <h4>{thisCard.name}</h4>
                <img className='pokemon-img' src={thisCard.img}></img>
                <div className='pokemon-info'>
                    {cardTypes.map((type, index) => {
                        return (<p key={index}>
                            {type.type.name}
                        </p>)
                    })}
                </div>
                <button onClick={handleButtonClick}>{buttonText}</button>
            </section>
       </div>
    )
}
