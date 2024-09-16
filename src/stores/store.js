import { configureStore } from "@reduxjs/toolkit";

import { allPokemonReducer } from "./pokedexSlice";

export default configureStore({
  reducer: {
    allPokemon: allPokemonReducer,
  },
});
