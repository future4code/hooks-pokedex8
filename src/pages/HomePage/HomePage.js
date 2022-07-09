import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { ContainerHome, IndexPage } from "./styleHomePage";
import logoimg from "../../imagens/pokehooks.png";
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
  const [inputPokemon, setInputPokemon] = useState('')
  const [seachPoke, setSeachPoke] = useState([])

  // useEffect buscando dados dos pokemons na API //
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${init}&limit=${15}`)
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => alert(err));
  }, [init]);


  //========================== botões de prev e next
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


  const onChageInput = (e) => {
    setInputPokemon(e.target.value)
  }

  let listPokeRend = (

    pokemon &&
    pokemon.map((objPoke) => {
      return <CardPokemon pokemon={objPoke.name} />;
    })

  )

  let listPokeSeach = ''
    
  listPokeSeach = (
    seachPoke.map((objPoke) => {
      return <CardPokemon pokemon={objPoke.name} />;
    })
  )

  console.log(listPokeSeach)
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
        {seachPoke.length > 0 ? listPokeSeach : listPokeRend}
      </SectionCardRendered>
    </ContainerHome>
  );
}
