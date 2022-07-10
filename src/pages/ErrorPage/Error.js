import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Router/coordinator";
import { Button } from "@material-ui/core";
import { Global, DivButton, DivError, Img, Img2, DivImg } from "./styleError";
import error from "../../imagens/error.png";
import lost from "../../imagens/lost.gif";

export default function Error() {
  //=================== Estado
  const navigate = useNavigate();

  return (
    <Global>
      <DivError>
        <Img src={error} />
      </DivError>
      <DivImg>
        <Img2 src={lost} />
      </DivImg>
      <DivButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHomePage(navigate)}
        >
          Voltar
        </Button>
      </DivButton>
    </Global>
  );
}
