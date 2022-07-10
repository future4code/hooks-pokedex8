import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";
import lost from "../../imagens/lost.gif";

export const Global = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border: none;
`;

export const Img = styled.img`
  width: 69.4vw;
`;
export const Img2 = styled.img`
  border-radius: 20px;
`;

export const DivError = styled.div`
  display: flex;
  padding-top: 150px;
  justify-content: center;
`;
export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
