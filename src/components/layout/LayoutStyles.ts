import { styled } from "styled-components"

export const BlocPage = styled.main`
    padding: 0 5.5rem;
    max-width: 1440px;
    margin: auto;
    
    @media (max-width: 1024px) {
        padding: 0 1.5rem;
    }

    @media (max-width: 425px) {
        padding: 0;
    }
`