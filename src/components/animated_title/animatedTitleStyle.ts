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
`

export const Avatar = styled.img`
    width: 140px;
`

export const RedCogwheel = motion(styled(Cogwheel)`
    width: 120px;
    right: 0;
    top:5;
`)

export const GreyCogwheel = motion(styled(Cogwheel)`    
    width: 140px;
    bottom: 0;  
`)

export const YellowCogwheel = motion(styled(Cogwheel)`
    width: 80px;
    bottom: 30px;
    right: 18px;
`)

export const AnimatedTitleContainer = styled.div`
    width: 90%;
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