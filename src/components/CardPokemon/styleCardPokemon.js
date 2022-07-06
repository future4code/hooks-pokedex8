import styled from "styled-components";

//tamanho dos cartões com a page / grid
export const Main = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  border-radius: 20px;
  background-color: #ffffff70;
  width: 435px;
  height: 131px;
  `;

  export const Cont = styled.div`
  display: flex;
  :hover{
    transform: scale(1.1);
    background-color: blue;
    border-radius: 20px;
  }
  `
export const P = styled.p`
text-transform: capitalize;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
`


export const Img = styled.img`
background-color: #ffffff70;
  width: auto;
  height: 120px;
  border-radius:  20px 0px 0px 20px;
  :hover{
    background-color: blue;
    scale: calc(1.2);
    background: none;
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 300px;
  border-radius: 0px 20px 20px 0px;
  /* height: 30%; */
  /* background-color: blue; */
`;

export const DivButton = styled.div`
  display: flex;  
  width: 100%;
  justify-content: space-evenly;
  /* padding: 20px; */
  /* background-color: red; */
`;
