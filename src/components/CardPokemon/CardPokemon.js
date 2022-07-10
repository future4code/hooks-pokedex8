import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { goToDetalhesPage } from "../../Router/coordinator";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Main, DivName, Img, DivButton, Cont, P } from "./styleCardPokemon";
import { GlobalContextPoke } from "../../global/GlobalContextPoke";
import { BASE_URL } from "../../constants/url";

export default function CardPokemon({ pokemon }) {
  // ========================= Estado
  const { addPokemon, removePokemon, pokedex } = useContext(GlobalContextPoke);
  const [objDetailPoke, setObjDetailPoke] = useState({});
  const [imgPokemon, setImgPokemon] = useState("");
  const navigate = useNavigate();

  //  Pega os pokemons na API e coloca no estado //
  useEffect(() => {
    axios
      .get(`${BASE_URL}${pokemon}`)
      .then((res) => {
        setObjDetailPoke(res.data);
        setImgPokemon(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ========================= Botão adicionar
  const buttonAdd = (
    <Button
      variant="contained"
      size="small"
      color="primary"
      onClick={() => addPokemon(objDetailPoke)}
    >
      Adicionar
    </Button>
  );

  // ========================= Botão remover
  const buttonRemove = (
    <Button
      variant="contained"
      size="small"
      color="secondary"
      onClick={() => removePokemon(objDetailPoke.id)}
    >
      Remove
    </Button>
  );

  // ========================= Validação do botão adicionar e remover
  const valit = pokedex.filter((item) => {
    return item.name === pokemon;
  });

  return (
    <Main>
      <Cont>
        <Img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${objDetailPoke.id}.png`}
        />
        <DivName>
          <P>{objDetailPoke.name}</P>

          <DivButton>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => goToDetalhesPage(navigate, objDetailPoke.name)}
            >
              Detalhes
            </Button>
            {/* Verifica o botão e muda de adicicionar para remover */}
            {valit.length > 0 ? buttonRemove : buttonAdd}
          </DivButton>
        </DivName>
      </Cont>
    </Main>
  );
}
