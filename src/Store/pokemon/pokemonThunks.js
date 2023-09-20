
import axios from 'axios';
import { pokemonApi } from '../../Pokemon/Api/pokemon';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';


const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=24&offset=${page * 24}`);

        const { results, count} = data

        const pokemons = [];

        for (const pokemon of results) {
            const image = await getImage(pokemon.url)
            const newpokemon = {
                ...pokemon,
                image
            }
            pokemons.push(newpokemon);
        }
        
        dispatch(setPokemons({ pokemons: pokemons, page: parseInt(page),pages: parseInt(count/24) }));
    }
}

const getPokemon = (n='') => {
    return async (dispatch) => {
        dispatch(startLoadingPokemons());

        const { data } = await pokemonApi.get(`/pokemon/${n}`);
        const { name, sprites, types, stats} = data

        let type= '';
        types.map((t)=>{
            type += t.type.name
        });

        const pokemon = {
            name,
            image: sprites.front_default,
            type,
            stats: {attack:0,hp:0,defense:0}
        }
        stats.map((stat)=>{
            pokemon.stats[stat.stat.name] = stat.base_stat
        });
        


        dispatch(setPokemons({ pokemons: [pokemon] }));
    }
}

const getImage = async (url = '') => {
    const { data } = await axios.get(url);
    return data.sprites.front_default;
}

const getPokemonByName = (name = '') => {
    return async (dispatch, getState) => {
        
        try {
            dispatch(startLoadingPokemons());
            const pokemons = await pokemonApi.get(`/pokemon/${name.toLowerCase()}`);
            const { species } = pokemons.data
            const { data } = await pokemonApi.get(species.url);
            const pokemonSpecies = data.varieties

            const arr = pokemonSpecies.map((p) => {
                const { pokemon } = p;
                p = {
                    ...pokemon
                }
                return p;
            });
            const pokArr = [];
            for (const pokemon of arr) {
                const { data } = await axios.get(pokemon.url);
                const newpokemon = {
                    ...pokemon,
                    image: data.sprites.front_default
                }
                pokArr.push(newpokemon);
            }

            dispatch(setPokemons({ pokemons: pokArr, pages: 0 }));
        } catch (error) {
            dispatch(setPokemons({ pokemons: [], pages: 0 }));
        }
    }
}

const nextPage = (page) => getPokemons(page + 1);

const previusPage = (page) => getPokemons(page - 1);

export {
    getPokemons,
    getPokemonByName,
    nextPage,
    previusPage,
    getPokemon
}