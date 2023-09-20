import { Route, Routes } from "react-router-dom"
import { PokemonInfo } from "../Pages/PokemonInfo"
import { PokemonApp } from "../Pages/PokemonApp"

export const PokemonRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/:name" element={<PokemonInfo />} />
                <Route path="/" element={<PokemonApp />} />
               
            </Routes>
        </>
    )
}