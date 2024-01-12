import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

function Pokemon({ pokemon }) {
    return (
        <div>
            <h1>Generation One</h1>
            {pokemon.map(card => {
                return (
                    <PokemonCard card = {card}/>
                )
            })}
        </div>
    )
}

export default Pokemon
