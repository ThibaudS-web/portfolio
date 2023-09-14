import { styled } from "styled-components"

export const Link = styled.a`
    text-decoration: none;
    color: unset;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const Btn = styled.button<{ $homeBtn: boolean }>`
    width: fit-content;
    border: 2px solid black;
    height: ${(props) => props.$homeBtn ? "60px" : "50px"};
    border-radius: 1.1rem;
    font-size: ${(props) => props.$homeBtn ? "2rem" : "1.3rem"};
    text-align: center;
    padding: 0 2rem;
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.41);
    font-family: ${(props) => props.$homeBtn ? "Bebas Neue, sans-serif" : "Inter, sans-serif"};
    cursor: pointer;
    background-color: initial;

    @media (hover: hover) and (pointer: fine) {
        &:hover{
            background-color: #F3A712;
            color: white;
            fill: white;
        }
    }   

    @media (max-width: 1024px) {
        font-size: ${(props) => props.$homeBtn ? "1.7rem" : "1.3rem"};
        padding: ${(props) => props.$homeBtn ? "0 2rem" : "0 1rem"};
    }

    @media (max-width: 768px) {
        font-size: ${(props) => props.$homeBtn ? "1.4rem" : "1.3rem"};
        padding: ${(props) => props.$homeBtn ? "0 2rem" : "0 2rem"};
    }

    @media (max-width: 500px) {
        font-size: ${(props) => props.$homeBtn ? "1.2rem" : "1.1rem"};
        padding: ${(props) => props.$homeBtn ? "0 2rem" : "0 1rem"};
        height: 40px;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.41);
    }

    @media (max-width: 350px) {
        padding: ${(props) => props.$homeBtn ? "0 1rem" : "0 0.5rem"};
    }
`

export const TextOnBtn = styled.span`
    margin-right: 0.3em;
`