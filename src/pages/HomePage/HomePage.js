import React, { useContext, useEffect, useState } from "react";
// import { GlobalContextPoke } from "../../global/GlobalContextPoke";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import { ContainerHome, IndexPage } from "./styleHomePage";
import axios from "axios";
import logoimg from "../../imagens/pokehooks.png";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import {
  DivButtonPokedex,
  SectionCardRendered,
  ContHeader,
} from "./styleHomePage";

export default function HomePage() {
  //========================== Estado
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();
  // const { allPokemons } = useContext(GlobalContextPoke);
  // const [inputPokemon, setInputPokemon] = useState("");
  const [init, setInit] = useState(0);
  const [seachPoke, setSeachPoke] = useState([]);

  // useEffect buscando dados dos pokemons na API //
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${init}&limit=${15}`)
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => alert(err));
  }, [init]);

  //========================== Adicionar 15 pokemons no array quando clicado o botão "próxima página"
  const nextPage = (num) => {
    setInit(init + 15);
    setPokemon([]);
  };

  //========================= Diminui 15 pokemons no array quando clicado o botão "página anterior"
  const menosPage = (num) => {
    if (init >= 15) {
      setInit(init - 15);
      setPokemon([]);
    }
  };

  //======================== imput controlado para futura implementação de busca
  // const onChageInput = (e) => {
  //   setInputPokemon(e.target.value)
  // }

  //======================== Renderizar os poquemons no junto com o componente "CardPokemons"
  let listPokeRend =
    pokemon &&
    pokemon.map((objPoke) => {
      return <CardPokemon pokemon={objPoke.name} />;
    });

  //======================== Variável com valor vazio
  let listPokeSeach = "";

  //======================== Função com map para renderizar os poquemons no junto com o componente "CardPokemons"
  listPokeSeach = seachPoke.map((objPoke) => {
    return <CardPokemon pokemon={objPoke.name} />;
  });

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
        {/* Condição para renderizar cardpokemon com botão de adicionar ou botão de remover */}
        {seachPoke.length > 0 ? listPokeSeach : listPokeRend}
      </SectionCardRendered>
    </ContainerHome>
  );
}
