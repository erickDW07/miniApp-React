import { useSelector } from "react-redux"
import { ItemCard } from "./ItemCard";
import { ListCardsLoading } from "./ListCardsLoading";

export const ListPokemons = () => {
    const { isLoading, pokemons = [] } = useSelector(state => state.pokemons);
    return (
        <>
            {
                isLoading
                    ? (
                     <ListCardsLoading/>
                    )
                    :(pokemons.length > 0)?(
                        <div className="row g-2 px-4">
                            {
                                pokemons.map((pokemon) => <ItemCard key={pokemon.name} item={pokemon} />)
                            }
                        </div>
                    )
                    : <div className="center-grid">Not found</div>
            }

        </>

    )
}