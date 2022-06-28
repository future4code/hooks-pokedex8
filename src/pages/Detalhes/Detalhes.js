import React from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function Detalhes() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1" align={"center"}>
        Detalhes Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goToPokedexPage(navigate)}
      >
        Voltar
      </Button>
    </div>
  );
}
