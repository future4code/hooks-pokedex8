import styled from "styled-components"
import imgBack from '../../imagens/pokemon.png'

export const ContainerHome = styled.div`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    width: 100vw;
    height: 100vh;
    
    background-color: green;
    background-image: url(${imgBack}) ;
    background-size: contain;

    overflow: scroll;

    .sectionCardRendered{
        width: 100%;
        height: 200px;
        
        display: grid;
        grid-template-columns: repeat(5, 1fr);
       
    }
`;
