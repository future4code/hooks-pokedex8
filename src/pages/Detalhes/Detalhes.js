import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { goBack } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function Detalhes() {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const namePokemon = params.namepokemon
  
  
  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log("erro :", err);
      });
  }, []);

  
  return (
    <div>
      <Typography variant="h1" align={"center"}>
        Detalhes Page
      </Typography>
      <div>
              
        <img src={pokemon.sprites && pokemon.sprites.front_default}/>    
        <img src={pokemon.sprites && pokemon.sprites.back_default}/> 

        {pokemon.name}
        {pokemon.stats && pokemon.stats.map(item => {
          return(
            <div>
              {item.stat.name}: {item.base_stat}
            </div>
          )
        })}         
        <br/>     

        {pokemon.types && pokemon.types.map(item => {
          return(
            <div>
              {item.type.name}
            </div>
          )
        })}         
        <br/>     

        {pokemon.moves && pokemon.moves[0].move.name}
        <br/>
        {pokemon.moves && pokemon.moves[1].move.name}
        <br/>
        {pokemon.moves && pokemon.moves[2].move.name}
  
        <br/>

      <Button
        variant="contained"
        color="primary"
        onClick={() => goBack(navigate)}
      >
        Voltar
      </Button>
    </div>
    </div>
  );
}
