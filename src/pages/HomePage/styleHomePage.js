import styled from "styled-components";
import imgBack from "../../imagens/pokemon.png";

export const ContainerHome = styled.div`
  background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const ContHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding-top: 10px;
  background: rgb(105, 146, 242);
  background: linear-gradient(
    25deg,
    rgba(105, 146, 242, 1) 36%,
    rgba(121, 201, 249, 1) 49%,
    rgba(176, 228, 106, 1) 64%
  );
  height: 121px;
`;

export const IndexPage = styled.div`
  display: flex;
  padding: 0px 40px;
  padding-bottom: 20px;
  justify-content: space-between;
  height: 40px;

  button {
    padding: 15px;
    font-size: 1.5rem;
  }
`;

export const DivButtonPokedex = styled.div`
  display: flex;
`;

// Grade dos cards Pokemons //
export const SectionCardRendered = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-left: 5vw;
  margin-right: 5vw;
  padding-bottom: 20px;
`;
