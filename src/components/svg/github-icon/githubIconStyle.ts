import { styled } from "styled-components"

export const SVG = styled.svg<{ $isProjectPage?: boolean }>`
    width: ${(props) => props.$isProjectPage ? "35px" : "75px"};
    height: auto;

    @media (max-width: 768px) {
        width: ${(props) => props.$isProjectPage ? "35px" : "60px"};
    }

    @media (max-width: 425px) {
        width: ${(props) => props.$isProjectPage ? "25px" : "45px"};
    }
`;