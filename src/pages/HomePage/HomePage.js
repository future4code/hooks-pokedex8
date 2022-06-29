import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { goToPokedexPage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h1" align={"center"}>
        Pokedex 8 - Home Page
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => goToPokedexPage(navigate)}
      >
        Pokedex Page
      </Button>
    </div>
  );
}
