import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../stores/pokedexSlice.js";
import PokemonCard from "./PokemonCard.jsx";
import PokemonSearch from "./PokemonSearch.jsx";
import { Paginator } from "primereact/paginator";
import "../assets/style/AppPokedex.scss";
function AppPokedex() {
  const [pokemonName, setPokemonName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(9);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemon.allPokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const filteredPokemon = useMemo(() => {
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  }, [pokemons, pokemonName]);

  const indexOfLastPokemon = currentPage * rowsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - rowsPerPage;
  const currentPokemons = filteredPokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const handlePageChange = (event) => {
    setCurrentPage(event.page + 1);
  };

  return (
    <>
      <div className="app__pokedex__all">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1>Lista di tutti i pokemon</h1>
          <PokemonSearch
            pokemonName={pokemonName}
            setPokemonName={setPokemonName}
            allPokemon={filteredPokemon}
            totalResult={filteredPokemon.length}
            isVisiblePreference={false}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-5 mt-5">
          {currentPokemons.length > 0 ? (
            currentPokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                pokemonData={pokemon}
              />
            ))
          ) : (
            <h1>Nessun risultato</h1>
          )}
        </div>
        <div className="paginator mt-11">
          <Paginator
            first={indexOfFirstPokemon}
            rows={rowsPerPage}
            totalRecords={filteredPokemon.length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default AppPokedex;
