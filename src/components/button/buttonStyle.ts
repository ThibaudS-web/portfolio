import { styled } from "styled-components"

export const Link = styled.a`
    text-decoration: none;
    color: unset;
    display: flex;
    gap: 5px;
    align-items: center;
`
export const Btn = styled.button<{ $homeBtn: boolean }>`
    border: 3px solid black;
    height: ${(props) => props.$homeBtn ? "60px" : "40px"};
    border-radius: 1.1rem;
    font-size: ${(props) => props.$homeBtn ? "2rem" : "1.3rem"};
    text-align: center;
    padding: ${(props) => props.$homeBtn ? "0 2.3rem" : "0 1rem"};
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.41);
    font-family: ${(props) => props.$homeBtn ? "Bebas Neue, sans-serif" : "Inter, sans-serif"};
    cursor: pointer;

    &:hover{
        background-color: #F3A712;
        color: white;
        fill: white;
    }

    @media (max-width: 1024px) {
        font-size: ${(props) => props.$homeBtn ? "1.7rem" : "1.3rem"};
        padding: ${(props) => props.$homeBtn ? "0 2rem" : "0 1rem"};
    }
`
export const TextOnBtn = styled.span`
    margin-right: 0.3em;
`