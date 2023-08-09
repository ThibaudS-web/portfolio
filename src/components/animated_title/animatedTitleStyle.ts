import { styled, css } from "styled-components"
import { motion } from "framer-motion"


const Cogwheel = styled.img`
    position: absolute;
`

export const TitleContainer = styled.div`
    flex-grow: 0.9;
    /* border: 2px solid yellow; */
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-around;
`

export const Title = styled.h1`
    letter-spacing: 0.1rem;
    font-size: 2.5em;
    @media (max-width: 1100px) {
        font-size: 2em;
    }
    @media (max-width: 1024px) {
        font-size: 1.6em;
    }
`

export const Avatar = styled.img`
    width: 140px;
    @media (max-width: 1100px) {
        width: 120px;
    }
    @media (max-width: 1024px) {
        width: 100px;
    }
`

export const GreyCogwheel = motion(styled(Cogwheel)`    
    width: 140px;
    bottom: 0;  

    @media (max-width: 1440px) {
        width: 120px;
        left: 20px;
    }

    @media (max-width: 1024px) {
        width: 100px;
        left: 50px;
        bottom: 30px;  
    }
`)

export const RedCogwheel = motion(styled(Cogwheel)`
    width: 120px;
    right: 0;
    top: 5px;

    @media (max-width: 1440px) {
        width: 100px;
        top: 40px;
    }

    @media (max-width: 1024px) {
        width: 80px;
        top: 50px;
        right: 20px;
    }
`)

export const YellowCogwheel = motion(styled(Cogwheel)`
    width: 80px;
    bottom: 30px;
    right: 18px;
    @media (max-width: 1440px) {
        width: 60px;
        right: 25px;
    }

    @media (max-width: 1024px) {
        width: 50px;
        bottom: 50px;
    }
`)

export const AnimatedTitleContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`

export const CogwheelsContainer = styled.div<{ $rotate?: boolean }>`
    width: 240px;
    height: 240px;
    /* border: 2px solid green; */
    position: relative;
    ${(props) => props.$rotate && css`transform: rotate(90deg);`}
`