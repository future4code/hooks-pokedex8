import React, { useState } from "react";
import { GlobalContextPoke } from "./GlobalContextPoke";

export const GlobalStatePoke = (props) => {
    const [pokedex, setPokedex] = useState([])

    const addPokemon = (objPoke) => {
        const array = [...pokedex, objPoke]
        setPokedex(array)
    }

    const removePokemon = (idPokemon) => {
        const array = pokedex.filter(obj=>{
            return obj.id != idPokemon
        })

        setPokedex(array)

    }

    return (
        <GlobalContextPoke.Provider
            value={{ pokedex, addPokemon, removePokemon }} >
            {props.children}
        </GlobalContextPoke.Provider>

    )
}