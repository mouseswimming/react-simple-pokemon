export default function PokemonList({ pokemons }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {pokemons.map((pokemon) => (
        <div
          className="p-4 border-gray-400 rounded-md border"
          key={pokemon.name}
        >
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}
