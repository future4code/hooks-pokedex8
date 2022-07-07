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
  DivC, Img
} from "./styleHomePage";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";

export default function HomePage() {
  // Estado //
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();
  const { allPokemons } = useContext(GlobalContextPoke)
  const [limit, setLimit] = useState(21)
  const [init, setInit] = useState(0)



  // useEffect buscando dados dos pokemons na API //
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${init}&limit=${limit}`)
      .then((res) => {
        setPokemon(res.data.results);

      })
      .catch((err) => alert(err));
  }, [init])


  const nextPage = (num) => {

    setInit(init + 21)
    setPokemon([])

  }

  const menosPage = (num) => {
    if (init >= 21){
      setInit(init - 21)
      setPokemon([])}
      
      

}

console.log(pokemon)
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
          return <CardPokemon pokemon={objPoke.name} />;
        }
        )}
      <IndexPage >
        <button onClick={nextPage}>proxima pagina</button>
        <button onClick={menosPage}>pagina anterior</button>

      </IndexPage>
    </SectionCardRendered>


  </ContainerHome>
);
}
