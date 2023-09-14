import { styled } from "styled-components"

export const TextInfo = styled.p`
    margin: 4rem 0;
    font-size: 1.8rem;   
    line-height: 3.5rem;
    text-align: justify;
    padding: 0 7.5rem;

    @media (max-width: 1440px) {
        padding: 2rem 5.5rem;
    }

    @media (max-width: 1024px) {
        padding: 0 4rem;
        font-size: 1.4rem; 
        line-height: 3rem;
    }

    @media (max-width: 850px) {
        padding: 0 1rem;
        margin: 3rem 0 2rem 0;
    }

    @media (max-width: 500px) {
        padding: 0 1rem;
        font-size: 1rem; 
        line-height: 2rem;
        margin: 1rem 0; 
    }
`

export const FooterLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 1440px) {
        padding: 0 5.5rem;
    }

    @media (max-width: 1200px) {
        padding: 0 5.5rem;
        flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
        padding: 0 4rem;
    }

    @media (max-width: 850px) {
        flex-direction: column-reverse;
        gap: 2rem;
        padding: 0 1rem;
    }

    @media (max-width: 540px) {
        gap: 1rem;
    }
`

export const SocialLink = styled.a`
    &:hover{
        fill: #F3A712;
        
        @media (max-width: 500px) {
            fill: unset;   
        }
    }
`

export const SocialContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 850px) {
        gap: 0.5rem;
        justify-content: space-around;
        width: 100%;
    }    
`

