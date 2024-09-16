import { InputText } from "primereact/inputtext";

const PokemonSearch = ({ pokemonName, setPokemonName, totalResult }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full md:w-64  rounded-lg md:ml-auto">
        <h3 className="text-gray-700 font-bold text-lg">Ricerca un pokemon</h3>
        <InputText
          className="border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Ricerca per nome"
          onChange={(e) => setPokemonName(e.target.value)}
          value={pokemonName}
        />
        <small className="text-gray-500 text-left">
          {pokemonName.length > 0 && totalResult !== 0
            ? `*Risultati trovati : ${totalResult}`
            : ""}
        </small>
      </div>
    </>
  );
};

export default PokemonSearch;
