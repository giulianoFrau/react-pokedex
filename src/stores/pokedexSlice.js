import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Pokemon } from "../api";

// Carica lo stato dal sessionStorage, se esiste
const savedState = JSON.parse(sessionStorage.getItem("pokemonState")) || {
  allPokemon: [],
  preferPokemon: [],
  status: "idle",
  error: null,
};

// Action asincrona per fare la chiamata all'API
export const fetchPokemon = createAsyncThunk("getPokemon", async () => {
  const response = await Pokemon.getPokemon();
  const resp = response.data.results;
  return resp;
});

export const allPokemonSlice = createSlice({
  name: "allPokemon",
  initialState: savedState,
  reducers: {
    deletePokemon: (state, action) => {
      state.allPokemon = state.allPokemon.filter(
        (pokemon) => pokemon.name !== action.payload
      );
      state.preferPokemon = state.preferPokemon.filter(
        (pokemon) => pokemon.name !== action.payload
      );

      sessionStorage.setItem("pokemonState", JSON.stringify(state));
    },
    addPokemon: (state, action) => {
      state.preferPokemon.push(action.payload);
      sessionStorage.setItem("pokemonState", JSON.stringify(state));
    },
    removePokemonToFavourite: (state, action) => {
      state.preferPokemon = state.preferPokemon.filter(
        (pokemon) => pokemon.name !== action.payload
      );
      sessionStorage.setItem("pokemonState", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.allPokemon = action.payload.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      // Salva lo stato aggiornato nel sessionStorage
      sessionStorage.setItem("pokemonState", JSON.stringify(state));
    });
  },
});

export const { deletePokemon, addPokemon, removePokemonToFavourite } =
  allPokemonSlice.actions;
export const allPokemonReducer = allPokemonSlice.reducer;
