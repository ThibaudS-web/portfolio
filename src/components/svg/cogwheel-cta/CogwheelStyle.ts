import styled, { css, keyframes } from "styled-components"

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);  
    }
`

export const SVG = styled.svg<{ $isActive: boolean }>`
    width: 50px;
    height: 50px;
    cursor: pointer; 
    animation: ${rotate} 4s linear infinite;
    ${((props) => props.$isActive ? css`animation-play-state: running;` : css`animation-play-state: paused;`)}

    @media  (max-width: 500px) {
        width: 35px;
        height: 35px;
    }

`
export const Group = styled.g<{ $isActive: boolean }>`
   fill: ${(props) => props.$isActive ? "#A22C29" : "#000000"};
`
