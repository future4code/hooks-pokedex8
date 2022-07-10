import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";
import camp from "../../imagens/camp.gif";

export const Global = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imgBack});
  background-size: contain;
  overflow-y: scroll;
`;

export const DivButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Typo = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivD = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ContA = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivCard = styled.div`
  border-radius: 20px;
  width: max-content;
  padding: 15px 20px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const DivC = styled.div`
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

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DivA = styled.div`
  background: rgba(121, 201, 249, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  :hover {
    background: rgba(121, 201, 249, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(121, 201, 249, 0.18);
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  width: 140px;
  :hover {
    transform: scale(1.2);
  }
`;

export const DivB = styled.div`
  background: rgba(121, 201, 249, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  :hover {
    background: rgba(121, 201, 249, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transform: scale(1.1);
  }
`;

export const DivE = styled.div`
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0px 40px;
  padding: 20px 40px;
  border-radius: 20px;
  background: rgba(127, 173, 113, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  :hover {
    background: rgba(255, 255, 0, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transform: scale(1.1);
  }
`;

export const DivH = styled.div`
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid black;
  width: max-content;
  font-weight: 600;
  font-size: 18px;
`;

export const Progress = styled.div`
  --progress: ${(props) => props.number};
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

export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 240px;
  padding: 40px 50px;
  gap: 40px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  :hover {
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transform: scale(1.1);
  }
`;

export const DivF = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-transform: capitalize;
`;

export const DivG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-transform: capitalize;
`;

export const DivAdicionar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
