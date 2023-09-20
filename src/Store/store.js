import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './pokemon';
import { authSlice } from './auth';
import { todoSlice } from './todo';


export const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer,
        auth: authSlice.reducer,
        todo: todoSlice.reducer
    },
   
});