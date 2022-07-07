import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { goBack } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";
import comfy from "../../imagens/comfy.gif";
import camp from "../../imagens/camp.gif";


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
    background: rgba( 121, 201, 249, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 20px;
  :hover {
    background: rgba( 121, 201, 249, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 121, 201, 249, 0.18 );
    transform: scale(1.1);    
  }
`;

const DivB = styled.div`
      background: rgba( 121, 201, 249, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 20px;
  :hover {
    background: rgba( 121, 201, 249, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transform: scale(1.1);
  }
`;

const DivCard = styled.div`
  border-radius: 20px;
  width: max-content;
  padding: 15px 20px;
  margin-top: 30px; 
  background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const DivC = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-image: url(${camp});
  background-repeat: no-repeat;  
  background-size: cover;
  :hover {
    transform: scale(1.1);
  }
`;

const DivD = styled.div`
  text-transform: uppercase; 
  text-align: center;  
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 40px;  
  background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const DivE = styled.div`
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0px 40px;
  padding: 20px 40px;
  border-radius: 20px;
  background: rgba( 127, 173, 113, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  :hover {
    background: rgba( 255, 255, 0, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transform: scale(1.1);
  }
`;

const DivF = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 140px;
  :hover {
    transform: scale(1.2);
  }
`;

const DivG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-transform: capitalize;
`;

const DivH = styled.div`
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid black;
  width: max-content;
  font-weight: 600;
  font-size: 18px;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 240px;
  padding: 40px 50px;
  gap: 40px;
  background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 20px;
  :hover {
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px ); 
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transform: scale(1.1);
  }
`;

const DivButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const Progress = styled.div`
  --progress: ${(props)=>props.number};
  height: 5px;
  padding: 2px;
  background-color: black;
  display: flex;
  :before {
    content: "";
    width: calc(var(--progress) * 0.5%);
    background-color: hsl(calc(var(--progress) * 1.4), 80%, 50%);
    transition: all 0.2s ease;
  }
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
                <DivH>DETALHES</DivH>
                {pokemon.stats &&
                  pokemon.stats.map((item) => {
                    return (
                      <div>
                        {item.stat.name}: {item.base_stat}
                        <Progress number={item.base_stat}>                          
                        </Progress>
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
    </Global>
  );
}
