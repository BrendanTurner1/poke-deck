import { useEffect, useState } from "react";

export default function PokemonCard({ card }) {
    const [cardInfo, setCardInfo] = useState([]);
    const [cardImg, setCardImg] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        fetch(card.url)
        .then(response => {
            if(!response.ok) {
                console.log('error')
            }
            return response.json();
        })
        .then(data => {
            setCardInfo(data);
            fetch(data.forms[0].url)
                .then(response => {
                    if(!response.ok) {
                        console.log('error')
                    }
                    return response.json();
                })
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
},[])

    return (
       <div>
            <h1>{card.name}</h1>
            {/* {console.log(cardInfo.forms[0].url, `card ${card.name}`)} */}
            <img src={cardImg}></img>
            <h2></h2>
       </div>
    )
}