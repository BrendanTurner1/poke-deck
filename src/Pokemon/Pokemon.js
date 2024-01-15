import './Pokemon.css';
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { pokemonCall } from '../ApiCalls/ApiCalls';

const urlGet = (url) => {
    return url.split('/').filter((segment)=>{return segment!=''}).pop()
}

function Pokemon({ addToDeck }) {
    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('');
    const [searchParams] = useSearchParams();
    const itemsPerPage = searchParams.get('itemsperpage')||25;

    useEffect(() => {
        pokemonCall()
        .then(data => {
            setPokemon(data.results);
        })
        .catch(error => {
            setError(error.message);
            })
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = pokemon.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(pokemon.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
    

    return (
        <div className='pokemon-main'>
            <h1>Generation One</h1>
            <Link to='./deck' style={{ color: 'Black', display:'inline-block' }}><h2>View Deck</h2></Link>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
            <ul className='pokemon-display'>
            {currentData.map((card) => {
                return (
                    <PokemonCard id={urlGet(card.url)} key={card.url} onClick={addToDeck} buttonText={'Add to Deck'}/>
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
