import './PokemonCard.css';
import { useEffect, useState } from "react";
import { pokemonInfo } from '../ApiCalls/ApiCalls'

export default function PokemonCard({ id, onClick, deckId, buttonText }) {
    const [thisCard, setThisCard] = useState({
        name: '',
        img: '',
        types: []
    })
    const [error, setError] = useState("");

    useEffect(() => {
        pokemonInfo(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(data => {
            setThisCard( 
                {name: data.name,
                img: data.sprites.front_default,
                types: data.types})
        })
        .catch(error => {
            setError(error.message);
        })
    },[id])

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
                <img className={`pokemon-img ${id}`} src={thisCard.img}></img>
                <div className='pokemon-info'>
                    {thisCard.types.map((type, index) => {
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
