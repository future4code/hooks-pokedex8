import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`

    border: 2px solid black;
`


const CardPokemon = ({pokemon}) =>{
    const [objDetailPoke, setObjDetailPoke] = useState({})
    const [imgPokemon , setImgPokemon] = useState('')

useEffect(()=>{
    axios.get(pokemon.url)
    .then(res=>{
        setObjDetailPoke(res.data)
        setImgPokemon(res.data.sprites.front_default)
    })
    .catch(err =>{
        console.log(err)
    })
},[])

    console.log(imgPokemon)
    return(
        <Container>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${objDetailPoke.id}.png` } />
        <p>{objDetailPoke.name}</p>
        </Container>
    )
}

export default CardPokemon