import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import PokemonCard from "./PokemonCard.jsx";
import PokemonSearch from "./PokemonSearch.jsx";
import "../assets/style/AppPokedex.scss";
import { Paginator } from "primereact/paginator";

const FavouritePokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(9);
  const favouritePokemon = useSelector(
    (state) => state.allPokemon.preferPokemon
  );

  const filteredPokemon = useMemo(() => {
    return favouritePokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  }, [favouritePokemon, pokemonName]);
  const indexOfLastPokemon = currentPage * rowsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - rowsPerPage;
  const currentPokemons = filteredPokemon
    .slice(indexOfFirstPokemon, indexOfLastPokemon)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  const handlePageChange = (event) => {
    setCurrentPage(event.page + 1);
  };

  return (
    <div className="app__pokedex">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1>Il mio pokedex</h1>
        <PokemonSearch
          isVisiblePreference={false}
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
          allPokemon={favouritePokemon}
          totalResult={favouritePokemon.length}
        />
      </div>

      {currentPokemons.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3  gap-5 mt-5">
          {currentPokemons.map((pokemon) => (
            <PokemonCard
              isDeleteFromListVisible={false}
              key={pokemon.name}
              name={pokemon.name}
              pokemonData={pokemon}
            />
          ))}
        </div>
      ) : (
        <div>La lista è vuota</div>
      )}
      <div className="paginator mt-11">
        <Paginator
          first={indexOfFirstPokemon}
          rows={rowsPerPage}
          totalRecords={filteredPokemon.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FavouritePokemon;
