import { axios } from "./axios.js";

export default {
  getPokemon() {
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=100&limit=100");
  },
  getPokemonInfo(data) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
  },
};
