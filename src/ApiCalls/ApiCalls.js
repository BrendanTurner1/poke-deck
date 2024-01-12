export default function pokemonCall() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?offest=10&limit=10')
    .then(response => {
        if(!response.ok) {
            // throw new Error (`${error}: Failed to fetch data`)
            console.log('error')
        }
        // console.log(response.json())
        return response.json();
    })
}
