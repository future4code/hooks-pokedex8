import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { ContainerHome } from "./styleHomePage";
import logoimg from "../../imagens/pokedex.png";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import styled from "styled-components";
import {
  DivA,
  DivButtonPokedex,
  SectionCardRendered,
  DivB,
  ContHeader,
  DivC
} from "./styleHomePage";

export default function HomePage() {
  // Estado //
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();

  // useEffect buscando dados dos pokemons na API //
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((res) => {
        console.log("Aplicação enviada com sucesso!");
        setPokemon(res.data.results);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <ContainerHome>
      <ContHeader>
        {/* <DivA> */}
          {/* <DivB> */}
            <img src={logoimg} />
          {/* </DivB> */}
          <DivButtonPokedex>
            <Button
              variant="contained"
              color="primary"
              onClick={() => goToPokedexPage(navigate)}
            >
              Pokedex Page
            </Button>
          </DivButtonPokedex>
        {/* </DivA> */}
      </ContHeader>
      <SectionCardRendered>
        {pokemon &&
          pokemon.map((objPoke) => {
            return <CardPokemon pokemon={objPoke} />;
          })}
      </SectionCardRendered>
    </ContainerHome>
  );
}
