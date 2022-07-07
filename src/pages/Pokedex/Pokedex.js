import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { goToDetalhesPage, goToHomePage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import styled from "styled-components"
import imgBack from "../../imagens/pokemon.png";

const Global = styled.div`
background-color: red;
width: 100vw;
height: 100vh;
   background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border: none;
  `;


const Just = styled.div`
display: flex;
justify-content: center;
padding: 0 5vw;
padding-bottom: 20px;
flex-wrap: wrap;
gap: 20px;
background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border: none;
`
const DivButton = styled.div`
margin-left: 40px;
margin-bottom: 20px;
`

export default function Pokedex() {
  const navigate = useNavigate()
  const { pokedex } = useContext(GlobalContextPoke)

  console.log(pokedex)

  return (
    <Global>
      
      <Typography variant="h1" align={"center"}>
        Pokedex Page
      </Typography>
      <DivButton>

      <Button
        variant="contained"
        color="primary"        
        onClick={() => goToHomePage(navigate)}
        >Voltar</Button>
        </DivButton>
      <Just>
      {pokedex &&
        pokedex.map((objPoke) => {
          return <CardPokemon pokemon={objPoke.id} />;
        })}
      </Just>
      
    </Global>
  );
};