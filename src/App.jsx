import { useState, useEffect } from "react";
import { fetchData } from "./api/api";
import Card from "./components/Card";

const App = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokemon() {
            const data = await fetchData();
            setPokemon(data);
            setLoading(false);
        }
        getPokemon();
    }, []);

    if (loading) return <div>Loading Pokémon...</div>;

    return (
        <div className="bg-teal-800 border-4 border-amber-600 flex h-screen flex-wrap">
            {pokemon.map((poke) => (
                <Card 
                    key={poke.id}
                    id={poke.id}
                    name={poke.name}
                    image={poke.image}
                />
            ))}
        </div>
    );
};

export default App;