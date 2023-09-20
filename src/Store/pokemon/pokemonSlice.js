import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState:{
    pages: 0,
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
      state.pokemons = [];
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons
      state.pages = action.payload.pages
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
