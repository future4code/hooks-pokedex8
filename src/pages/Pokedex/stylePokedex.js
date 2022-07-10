import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";

export const Global = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border: none;
`;

export const DivPoke = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const DivButton = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
`;

export const Just = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5vw;
  padding-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
  background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border: none;
`;
