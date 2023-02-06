const fetchpokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonpromisses = []


    for(let i = 1; i <= 150; i++){
        fetch(getPokemonUrl(i)).then(Response => Response.json())

    }
    Promise.all(pokemonpromisses)
        .then(pokemons => {
            console.log(pokemons)

            const lisPokemons = pokemons.reduce()
        })
}


fetchpokemon()