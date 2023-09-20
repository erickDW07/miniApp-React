import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { CardInfo } from "../Components/CardInfo";
import { getPokemon } from "../../Store/pokemon";

export const PokemonInfo = () => {

   const dispatch = useDispatch();
   const { name } = useParams();   
   const { pokemons = [], isLoading } = useSelector(state => state.pokemons);
   
   useEffect(() => {
      dispatch(getPokemon(name));
   }, [name]);

   return (
      <>
         {
            isLoading ?
               <h1>Loading.....</h1>
               :pokemons.map((pokemon) =>
                     <CardInfo key={pokemon.name} pokemon={pokemon} / >
                  )
         }

      </>
   )
}