import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContextPoke } from "./GlobalContextPoke";

export const GlobalStatePoke = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [allPokemons, setAllPokemons] = useState([])

    const addPokemon = (objPoke) => {
        const array = [...pokedex, objPoke]
        setPokedex(array)
    }

    const removePokemon = (idPokemon) => {
        const array = pokedex.filter(obj => {
            return obj.id != idPokemon
        })

        setPokedex(array)

    }

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1155&offset=0')
            .then(res => {
                setAllPokemons(res.data.results)
            })

    }, [])


    return (
        <GlobalContextPoke.Provider
            value={{ pokedex, addPokemon, removePokemon, allPokemons }} >
            {props.children}
        </GlobalContextPoke.Provider>

    )
}