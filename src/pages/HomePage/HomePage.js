import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { ContainerHome, IndexPage } from "./styleHomePage";
import logoimg from "../../imagens/pokedex.png";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import styled from "styled-components";
import {
  DivA,
  DivButtonPokedex,
  SectionCardRendered,
  DivB,
  ContHeader,
  DivC,
  Img,
} from "./styleHomePage";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";

export default function HomePage() {
  // Estado //
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();
  const { allPokemons } = useContext(GlobalContextPoke);
  const [init, setInit] = useState(0);

  // useEffect buscando dados dos pokemons na API //
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${init}&limit=${15}`)
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => alert(err));
  }, [init]);

  const nextPage = (num) => {
    setInit(init + 15);
    setPokemon([]);
  };

  const menosPage = (num) => {
    if (init >= 15) {
      setInit(init - 15);
      setPokemon([]);
    }
  };

  console.log(pokemon);
  return (
    <ContainerHome>
      <ContHeader>
        <img src={logoimg} />
      </ContHeader>
      <IndexPage>
        <Button variant="contained" color="primary" onClick={menosPage}>
          {"<<"}
        </Button>
        <DivButtonPokedex>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToPokedexPage(navigate)}
          >
            Pokedex Page
          </Button>
        </DivButtonPokedex>
        <Button variant="contained" color="primary" onClick={nextPage}>
          {">>"}{" "}
        </Button>
      </IndexPage>

      <SectionCardRendered>
        {pokemon &&
          pokemon.map((objPoke) => {
            return <CardPokemon pokemon={objPoke.name} />;
          })}
      </SectionCardRendered>
    </ContainerHome>
  );
}
