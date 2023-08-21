import { styled } from "styled-components"

export const SVG = styled.svg`
    width: 75px;
    height: auto;

    @media (max-width: 768px) {
        width: 60px;
    }

    @media (max-width: 425px) {
        width: 45px;
    }
`;