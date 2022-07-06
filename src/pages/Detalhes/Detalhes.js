import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { goBack } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";

const Global = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imgBack});
  background-size: contain;
  overflow-y: scroll;
`;

const Typo = styled.div`
  margin-top: 40px;
`;

const ContA = styled.div`
  display: flex;
  justify-content: center;
`;
const DivA = styled.div`
  /* border: 2px solid black; */
  background-color: #9fd7f9;
  border-radius: 20px;
  :hover {
    background-color: blue;
    transform: scale(1.1);
  }
`;

const DivB = styled.div`
  /* border: 2px solid black; */
  background-color: #b8e2f9;
  border-radius: 20px;
  :hover {
    background-color: blue;
    transform: scale(1.1);
  }
`;

const DivCard = styled.div`
  /* border: 2px solid black; */
  border-radius: 20px;
  width: max-content;
  padding: 10px 15px;
  margin-top: 100px;
  background-color: #ffffff70;
`;

const DivC = styled.div`
  display: flex;
  /* width: max-content; */
  flex-direction: column;
  /* border: 2px solid black; */
  border-radius: 20px;

  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    25deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(176, 228, 106, 1) 67%
  );
  :hover {
    scale: calc(1.1);
  }
`;
const DivD = styled.div`
  text-transform: uppercase;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 40px;
  /* border-radius: 20px; */
`;

const DivE = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0px 20px;
  padding: 20px 20px;
  /* border: 2px solid black; */
  border-radius: 20px;
  background-color: #ffff00;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  :hover {
    transform: scale(1.1);
  }
`;

const DivF = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid black; */
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-transform: capitalize;

`;

const P = styled.p`
  margin: 0;
  text-transform: uppercase;
`;

const Img = styled.img`
  :hover {
    scale: calc(1.2);
  }
`;

const DivG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* border: 2px solid black; */
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-transform: capitalize;
`;
const DivH = styled.div`
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  width: max-content;
  font-weight: 600;
  font-size: 18px;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 180px; */
  padding: 11px;
  gap: 20px;
  /* border: 2px solid black; */
  background-color: yellow;
  border-radius: 20px;
  :hover {
    scale: calc(1.1);
  }
`;

const DivButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export default function Detalhes() {
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
        <Typography variant="h1" align={"center"}>
          Pokecard
        </Typography>
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
                <DivH>INFORMAÇÃO</DivH>
                {pokemon.stats &&
                  pokemon.stats.map((item) => {
                    return (
                      <div>
                        {item.stat.name}: {item.base_stat}
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
                  <br />
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
    </Global>
  );
}
