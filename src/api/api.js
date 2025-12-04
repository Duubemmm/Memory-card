export async function fetchData() { 
    const pokemonIds = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    
    const responses = await Promise.all(
        pokemonIds.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
    );
    
    const pokemonDataArray = await Promise.all(
        responses.map(res => res.json())
    );
    
    return pokemonDataArray.map(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default
    }));
}