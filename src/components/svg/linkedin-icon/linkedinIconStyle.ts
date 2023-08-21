import { styled } from "styled-components"

export const SVG = styled.svg`
    width: 65px;
    height: auto;

    @media (max-width: 768px) {
        width: 55px;
    }

    @media (max-width: 425px) {
        width: 40px;
    }
`;