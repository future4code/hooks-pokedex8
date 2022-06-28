import React from "react";
import { useNavigate } from "react-router";
import { goToDetalhesPage , goToHomePage } from "../../Router/coordinator";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


export default function Pokedex() {
  const navigate = useNavigate()
  return (
    <div>
    <Typography variant="h1" align={"center"}>
    Pokedex Page
  </Typography>
  <Button
  variant="contained"
  color="primary"
  onClick={()=>goToDetalhesPage(navigate)}
  >Detalhes Page</Button>
    <Button
  variant="contained"
  color="primary"
  onClick={()=>goToHomePage(navigate)}
  >Voltar</Button>
  </div>
   );
};