import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { goToDetalhesPage, goToHomePage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import imgPoke from "../../imagens/pokedex.png";
import { Global, Just, DivButton, DivPoke } from "./stylePokedex";

export default function Pokedex() {
  //==================== Estado
  const navigate = useNavigate();
  const { pokedex } = useContext(GlobalContextPoke);

  return (
    <Global>
      <DivPoke>
        <img src={imgPoke} />
      </DivPoke>
      <DivButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHomePage(navigate)}
        >
          Voltar
        </Button>
      </DivButton>
      <Just>
        {pokedex &&
          pokedex.map((objPoke) => {
            return <CardPokemon pokemon={objPoke.name} />;
          })}
      </Just>
    </Global>
  );
}
