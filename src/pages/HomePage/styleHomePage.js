import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imgBack});
  background-size: contain;
  overflow-y: scroll;
  `;

export const ContHeader = styled.div`
display: flex;
justify-content: center; 
  
  margin-bottom: 20px;
  background-color: green;
`
export const DivA = styled.div`
display: flex;
/* width: 1385px; */
/* margin-left: 250px; */
/* margin-bottom: 10px; */
background-color: red;
`;

export const DivB = styled.div`
display: flex;
/* margin-top: 20px; */
/* margin-left: 500px; */
`;
export const DivC = styled.div`

`
export const Img  = styled.img`

`

export const DivButtonPokedex = styled.div`
/* display: flex; */
/* flex-direction: column-reverse; */
/* width: 280px; */
/* margin-left: 352px; */
/* flex-direction: row-reverse; */
/* margin-top: 120px; */
/* background-color: blue; */
`;

// Grade dos cards Pokemons //
export const SectionCardRendered = styled.section`  
  display: grid;
  
  grid-template-columns: repeat(auto-fit, minmax(422px, 1fr));
  gap: 20px;
  padding-left: 250px;
  padding-right: 250px;
  margin-bottom: 20px;
`;
