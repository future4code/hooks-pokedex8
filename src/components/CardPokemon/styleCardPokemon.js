import styled from "styled-components";
import pokemon from "../../imagens/pokemon.png";

// ======================= Mapa

//Tamanho dos cartões com a page / grid
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 435px;
  height: 130px;
`;

export const Cont = styled.div`
  display: flex;
  :hover {
    transform: scale(1.1);
    border-radius: 20px;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: auto;
  height: 120px;
  border-radius: 20px 0px 0px 20px;
  :hover {
    transform: scale(1.2);
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 0px 20px 20px 0px;
  background-image: url(${pokemon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const P = styled.p`
  text-transform: capitalize;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000077;
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
