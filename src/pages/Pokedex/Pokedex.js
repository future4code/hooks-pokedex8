import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { goToDetalhesPage, goToHomePage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";
import CardPokemon from "../../components/CardPokemon/CardPokemon";

export default function Pokedex() {
  const navigate = useNavigate()
  const { pokedex } = useContext(GlobalContextPoke)

  console.log(pokedex)

  return (
    <div>
      <Typography variant="h1" align={"center"}>
        Pokedex Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goToHomePage(navigate)}
      >Voltar</Button>

      {pokedex &&
        pokedex.map((objPoke) => {
          return <CardPokemon pokemon={objPoke.id} />;
        })}
    </div>
  );
};