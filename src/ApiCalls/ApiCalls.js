function pokemonCall() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?offest=151&limit=151')
    .then(response => {
        if(!response.ok) {
            // throw new Error (`${error}: Failed to fetch data`)
            console.log('error')
        }
        // console.log(response.json())
        return response.json();
    })
}

function pokemonInfo(api) {
    return fetch(api)
    .then(response => {
        if(!response.ok) {
            console.log('error')
        }
        return response.json();
    })
}

export { pokemonCall, pokemonInfo}