import './Pokemon.css';
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

function Pokemon({ pokemon }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = pokemon.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(pokemon.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    return (
        <div>
            <h1>Generation One</h1>
            <ul>
            {currentData.map((card, index) => {
                return (
                    <PokemonCard card={card} key={index}/>
                )
            })}
            </ul>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pokemon
