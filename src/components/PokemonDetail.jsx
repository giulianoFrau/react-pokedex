import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../api";

const AppPokemonDetails = () => {
  const location = useLocation();
  const { pokemon, id, image } = location.state || {};
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const fetchPokemonInfo = async () => {
    const pokemonData = await Pokemon.getPokemonInfo(id);
    setPokemonInfo(pokemonData.data);
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, [id]);

  return (
    <div className="app__details w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 m-auto my-10 py-8 bg-white border border-gray-300 shadow-xl rounded-xl text-center text-xl">
      <div className="text-3xl font-bold text-gray-900 mb-4 uppercase">
        {pokemon?.name || "Nome non disponibile"}
      </div>

      <div className="flex flex-col justify-center gap-4 mb-6 items-center">
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={isHovered ? pokemonInfo?.sprites?.back_default || image : image}
          alt={pokemon?.name}
          className="w-40 sm:w-1/4 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
        />

        {pokemonInfo ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start w-full px-4">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm border h-full">
              <b className="text-gray-700">Pokemon ID</b> <br />
              <span className="text-gray-600">{id}</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm border h-full">
              <b className="text-gray-700">Tipo</b> <br />
              <span className="capitalize text-gray-600">
                {pokemonInfo.types.map((pokemonType, index) => (
                  <span key={index}>
                    {pokemonType.type.name}
                    {index !== pokemonInfo.types.length - 1 && <span>, </span>}
                  </span>
                ))}
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm border h-full">
              <b className="text-gray-700">Abilità</b> <br />
              <span className="capitalize text-gray-600">
                {pokemonInfo.abilities.map((pokemonAbility, index) => (
                  <span key={index}>
                    {pokemonAbility.ability.name}
                    {index !== pokemonInfo.abilities.length - 1 && (
                      <span>, </span>
                    )}
                  </span>
                ))}
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm border h-full">
              <b className="text-gray-700">Peso</b> <br />
              <span className="text-gray-600">{pokemonInfo.weight}</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Caricamento informazioni...</div>
        )}
      </div>
      <Link
        className="inline-block bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors shadow-md"
        to="/"
      >
        Torna alla Lista
      </Link>
    </div>
  );
};

export default AppPokemonDetails;
