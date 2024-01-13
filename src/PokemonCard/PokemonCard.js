import './PokemonCard.css';
import { useEffect, useState } from "react";
import { pokemonImg, pokemonInfo } from '../ApiCalls/ApiCalls'

export default function PokemonCard({ card }) {
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

    return (
       <div>
            <h1>{card.name}</h1>
            <img src={cardImg}></img>
       </div>
    )
}