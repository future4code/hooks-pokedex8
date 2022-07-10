import React, { useContext, useEffect, useState } from "react";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { goBack } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import pokecard from "../../imagens/pokecard.png";
import {
  Global,
  Typo,
  ContA,
  DivA,
  DivB,
  DivCard,
  DivC,
  DivD,
  DivE,
  DivF,
  Img,
  DivG,
  DivH,
  Div1,
  Div2,
  Div3,
  DivButton,
  Progress,
  DivAdicionar,
} from "./styleDetalhes";

export default function Detalhes() {
  // ========================= Estado
  const { addPokemon, removePokemon, pokedex } = useContext(GlobalContextPoke);
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const namePokemon = params.namepokemon;

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

  // ========================= Botão adicionar
  const buttonAdd = (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={() => addPokemon(pokemon)}
    >
      Adicionar
    </Button>
  );

  // ========================= Botão remover
  const buttonRemove = (
    <Button
      variant="contained"
      size="large"
      color="secondary"
      onClick={() => removePokemon(pokemon.id)}
    >
      Remove
    </Button>
  );

  // ========================= Validação do botão adicionar e remover
  const valit = pokedex.filter((item) => {
    return item.name === namePokemon;
  });

  return (
    <Global>
      <DivButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goBack(navigate)}
        >
          Voltar
        </Button>
      </DivButton>
      <Typo>
        <img src={pokecard} />
      </Typo>

      <DivD>{pokemon.name}</DivD>
      <ContA>
        <DivCard>
          <DivC>
            <Div2>
              <Div1>
                <DivA>
                  <Img src={pokemon.sprites && pokemon.sprites.front_default} />
                </DivA>
                <DivB>
                  <Img src={pokemon.sprites && pokemon.sprites.back_default} />
                </DivB>
              </Div1>

              <DivE>
                <DivH>DETALHES</DivH>
                {pokemon.stats &&
                  pokemon.stats.map((item) => {
                    return (
                      <div>
                        {item.stat.name}: {item.base_stat}
                        <Progress number={item.base_stat}></Progress>
                      </div>
                    );
                  })}
              </DivE>
              <Div3>
                <DivF>
                  <DivH>TIPO</DivH>
                  {pokemon.types &&
                    pokemon.types.map((item) => {
                      return <div>{item.type.name}</div>;
                    })}
                </DivF>
                <DivG>
                  <DivH>PODER</DivH>
                  {pokemon.moves && pokemon.moves[0].move.name}
                  <br />
                  {pokemon.moves && pokemon.moves[1].move.name}
                  <br />
                  {pokemon.moves && pokemon.moves[2].move.name}
                </DivG>
              </Div3>
            </Div2>
          </DivC>
        </DivCard>
      </ContA>
      <DivAdicionar>{valit.length > 0 ? buttonRemove : buttonAdd}</DivAdicionar>
    </Global>
  );
}
