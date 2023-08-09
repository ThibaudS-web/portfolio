import { styled } from "styled-components"

export const BlocPage = styled.div`
    /* border: 2px solid red; */
    padding: 0 3rem;
    max-width: 1440px;
    margin: auto;
    @media (max-width: 1024px) {
        padding: 0 1.5rem;
    }
`
export const TextInfo = styled.p`
    margin: 4rem 0;
    font-size: 1.8rem;   
    line-height: 3.5rem;
    text-align: justify;
    padding: 0 7.5rem;

    @media (max-width: 1440px) {
        padding: 2rem 5.5rem;
        margin: 2rem 0; 
    }

    @media (max-width: 1024px) {
        padding: 0 4rem;
        font-size: 1.4rem; 
        line-height: 3rem;
        margin: 2rem 0;
    }
`
export const FooterLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7.5rem;

    @media (max-width: 1440px) {
        padding: 0 5.5rem;    
    }

    @media (max-width: 1024px) {
        padding: 0 4rem;
    }
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