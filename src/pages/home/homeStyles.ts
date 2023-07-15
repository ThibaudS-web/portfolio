import { styled } from "styled-components"

export const BlocPage = styled.div`
    /* border: 2px solid red; */
    max-width: 1440px;
    margin: auto;
`
export const TextInfo = styled.p`
    margin-top: 4rem;
    font-size: 1.8rem;   
    line-height: 3.5rem;
    text-align: justify;
    padding: 2.5rem 7.5rem;
`

export const Button = styled.button`
    border: 3px solid black;
    height: 60px;
    border-radius: 1.1rem;
    font-size: 2rem;
    text-align: center;
    padding: 0 2.3rem;
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.41);

    cursor: pointer;

    &:hover{
        background-color: #F3A712;
        color: #ffffff;
        fill: #ffffff;
    }
`
export const TextOnBtn = styled.span`
    margin-right: 0.3em;
`
export const FooterLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7.5rem;
`
export const Link = styled.a`
    text-decoration: none;
    color: unset;
`
export const SocialLink = styled.a`
    &:hover{
        fill: #F3A712;
    }
`
export const SocialContainer = styled.div`
    display: flex;
    gap: 4rem;
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 4rem;
`