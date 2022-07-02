import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { ContainerHome } from './styles'
import logoimg from '../../imagens/pokedex.png'
import CardPokemon from "../../components/CardPokemon";



export default function HomePage() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((res) => {
        console.log("Aplicação enviada com sucesso!")
        setPokemon(res.data.results)
      })
      .catch((err) => alert(err))
  }, [])

  const Log = () => {
    console.log(pokemon)
  }

  return (
    <ContainerHome >
      <header>
        <img src={logoimg} />
        <button onClick={() => Log()}>console</button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToPokedexPage(navigate)}
        >
          Pokedex Page
        </Button>
      </header>

      <section className="sectionCardRendered">

      {pokemon && pokemon.map(objPoke=>{

        return(
          <CardPokemon pokemon={objPoke} />
        )
      })}

      </section>

    </ContainerHome>
  );
}
