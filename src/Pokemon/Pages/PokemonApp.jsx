import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react';
import { ListPokemons } from '../Components/ListPokemons';
import { Pagination } from '../../UI/Pagination';
import { Search } from '../../UI/Search';
import { getPokemonByName, getPokemons } from '../../Store/pokemon';


export const PokemonApp = () => {

   const dispatch = useDispatch();
   const { pages } = useSelector(state => state.pokemons);

   useEffect(() => {
      dispatch(getPokemons());
   }, []);

   const onSubmitSearch = (name) => {
      name ?
         dispatch(getPokemonByName(name))
         : dispatch(getPokemons())
   }



   return (
      <div className='p-3'>

         <h1>Pokemon App</h1>

         <div className='p-4'>
            <Search onSubmitSearch={onSubmitSearch} />
         </div>

         <ListPokemons />

         {
            pages > 0 ?
               <div className="py-3">
                  <Pagination />
               </div>
               : ''
         }


      </div>
   )
}