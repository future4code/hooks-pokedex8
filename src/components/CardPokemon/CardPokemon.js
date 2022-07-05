import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {goToDetalhesPage} from "../../Router/coordinator"
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Main, DivName, Img, DivButton, Cont,   } from "./styleCardPokemon";

export default function CardPokemon({ pokemon }) {
  const [objDetailPoke, setObjDetailPoke] = useState({});
  const [imgPokemon, setImgPokemon] = useState("");
  const navigate = useNavigate();

  //  Pega os pokemons na API e coloca no estado //
  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => {
        setObjDetailPoke(res.data);
        setImgPokemon(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    
    <Main>
      <Cont>         
        <Img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${objDetailPoke.id}.png`}
        /> 
        <DivName>
          <p>{objDetailPoke.name}</p>
          
          <DivButton>
            <Button variant="outlined" 
            size="small"
            color="primary" onClick={()=> goToDetalhesPage(navigate, objDetailPoke.name)}>
              Detalhes
            </Button>
            <Button variant="contained" 
            size="small"
            color="primary">
              Adicionar
            </Button>
          </DivButton>
        </DivName>
      </Cont>
    </Main>
    
  );
}
