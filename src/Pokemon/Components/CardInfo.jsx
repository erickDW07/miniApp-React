export const CardInfo = ({ pokemon}) => {
    return (
        <>
            <div key={pokemon.name} className="center-grid">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} />
                <h2>{pokemon.type}</h2>

                <span>Attack: {pokemon.stats.attack}</span>
                <span>Defense: {pokemon.stats.defense}</span>
                <span>HP: {pokemon.stats.hp}</span>
            </div>
        </>
    )
}