
const pokeApi = () =>{

    const PokeApiUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`


    

    const pokemonsPromisses = [];
  
    for(let i = 1; i <= 150; i++ ){
      pokemonsPromisses.push(fetch(PokeApiUrl(i)).then(Response => Response.json())) 
    }
    
    Promise.all(pokemonsPromisses)
    .then(pokemons => {
      
    const liPokemons = pokemons.reduce((accumulator, pokemon) => {
    const types = pokemon.types.map(typesInfo => typesInfo.type.name)


      accumulator += 
      `
      <li class="card">
            <img class = "card-image" ${types[0]} alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
            <h2 class = "card-title"> ${pokemon.id} ${pokemon.name} - </h2>
            <p class ="card-subtitle"> ${types.join(' | ')} </p>
      </li>
      `
      return accumulator
    },'')

    const ul = document.querySelector('[data-js = "pokedex"]')

    ul.innerHTML = liPokemons
  })
}


pokeApi()