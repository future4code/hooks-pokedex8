import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";


export default function HomePage() {
  const navigate = useNavigate();
  const [pokemon , setPokemon] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
    .then((res) => {
        console.log("Aplicação enviada com sucesso!")
        setPokemon(res.data.results)
    })
    .catch((err) => alert(err))
  },[])

    const Log = () =>{
      console.log(pokemon)
    }

  return (
    <div>
      <Typography variant="h1" align={"center"}>
        Pokedex 8 - Home Page
      </Typography>
      <button onClick={()=>Log()}>console</button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goToPokedexPage(navigate)}
      >
        Pokedex Page
      </Button>
      
    </div>
  );
}
