import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios"


export default function HomePage() {
  const navigate = useNavigate();
  const [pokemon , setPokemon] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    .then((res) => {
        alert("Aplicação enviada com sucesso!")
        setPokemon(res.data)
        clear()
    })
    .catch((err) => alert(err.response.message))
  },[])



  return (
    <div>
      <Typography variant="h1" align={"center"}>
        Pokedex 8 - Home Page
      </Typography>

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
