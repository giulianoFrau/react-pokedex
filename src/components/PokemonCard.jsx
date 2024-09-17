import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { useNavigate } from "react-router-dom";
import {
  addPokemon,
  deletePokemon,
  removePokemonToFavourite,
} from "../stores/pokedexSlice.js";
import { useDispatch, useSelector } from "react-redux";

const PokemonCard = ({ name, pokemonData, isDeleteFromListVisible = true }) => {
  const favouritePokemon = useSelector(
    (state) => state.allPokemon.preferPokemon
  );
  const dispatch = useDispatch();
  const toast = useRef(null);
  const navigate = useNavigate();

  const id = pokemonData.url.split("/").reverse()[1];
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const deleteCurrentPokemon = (e) => {
    e.stopPropagation();
    dispatch(deletePokemon(name));
    toast.current.show({
      severity: "error",
      summary: "Pokémon eliminato!",
      detail: "Pokémon rimosso correttamente dalla lista",
      life: 2000,
      closable: false,
    });
  };
  const addCurrentPokemon = (e) => {
    e.stopPropagation();
    dispatch(addPokemon(pokemonData));
    toast.current.show({
      severity: "success",
      summary: "Pokémon aggiunto!",
      detail: "Pokémon aggiunto correttamente al pokedex",
      life: 2000,
      closable: false,
    });
  };

  const removeToFavourite = (e) => {
    e.stopPropagation();
    dispatch(removePokemonToFavourite(name));
    toast.current.show({
      severity: "success",
      summary: "Pokémon rimosso!",
      detail: "Pokémon rimosso correttamente al pokedex",
      life: 2000,
      closable: false,
    });
  };

  const goToDetail = () => {
    navigate(`/pokemon/${name}`, {
      state: { pokemon: pokemonData, id, image },
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <div
        className="app__pokedex__container-card p-2 border border-gray-200 rounded-lg shadow-md flex flex-col gap-2 bg-white md:p-4 cursor-pointer hover:scale-105 transition-all"
        onClick={goToDetail}
      >
        <Avatar image={image} size="xlarge" className={`m-auto w-1/4 h-1/4 `} />
        <div
          className={`text-center text-xl font-semibold text-gray-800 uppercase transition-all`}
        >
          {name}
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-2 mt-auto ">
          {isDeleteFromListVisible && (
            <Button
              className="bg-red-500 text-white hover:bg-red-700 rounded-md p-2 flex justify-center flex-1"
              onClick={deleteCurrentPokemon}
            >
              Cancella dalla lista<i className="ml-3 pi pi-trash"></i>
            </Button>
          )}
          {favouritePokemon.find((pokemon) => pokemon.name === name) ? (
            <Button
              onClick={removeToFavourite}
              className="w-full flex justify-center bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-md p-2 flex-1"
            >
              Rimuovi dal pokedex <i className="ml-3 pi pi-heart-fill"></i>
            </Button>
          ) : (
            <Button
              onClick={addCurrentPokemon}
              className="w-full flex justify-center bg-teal-500 text-white hover:bg-teal-700 rounded-md p-2 flex-1"
            >
              Aggiungi al pokedex <i className="ml-3 pi pi-heart"></i>
            </Button>
          )}
        </div>

        <span className="text-center underline cursor-pointer">
          Clicca per i dettagli
        </span>
      </div>
    </>
  );
};

export default PokemonCard;
