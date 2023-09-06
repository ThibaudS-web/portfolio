import { styled } from "styled-components"
import { motion } from "framer-motion"

const Cogwheel = styled.img`
    position: absolute;
`

export const AnimatedTitleContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5%;
    justify-content: center;
`

export const TitleContainer = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-around;
    line-height: 2em;

    @media (max-width: 850px) {
        flex-grow: unset;
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 35%;
    }

    @media (max-width: 500px) {
        
        justify-content: unset;
        flex-direction: column;
        line-height: 1.5em;
    }

    @media (max-width: 350px) {
        line-height: 1em;
    }
`

export const Title = motion(styled.h1`
    letter-spacing: 0.1rem;
    font-size: 2.5em;

    @media (max-width: 1100px) {
        font-size: 2em;
    }

    @media (max-width: 1024px) {
        font-size: 1.8em;
    }

    @media (max-width: 850px) {
        font-size: 1.4em;
    }

    @media (max-width: 550px) {
        font-size: 1.2em;
        text-align: center;
        margin: auto;
    }

    @media (max-width: 375px) {
        font-size: 1em;
    }
`)

export const Avatar = motion(styled.img`
    width: 140px;
    display: block;

    @media (max-width: 1100px) {
        width: 120px;
    }

    @media (max-width: 1024px) {
        width: 100px;
    }

    @media (max-width: 550px) {
        display: none;
    }
`)

export const RightGreyCogwheel = motion(styled(Cogwheel)`    
    width: 55%;
    bottom: 0;  
    right: 0;

    @media (max-width: 425px) {  
        bottom: 10%;
        width: 50%;
        right: 5%;
    }

    @media (max-width: 375px) {  
        bottom: 18%;
    }

    @media (max-width: 325px) {  
        bottom: 20%;
    }
`)

export const RightRedCogwheel = motion(styled(Cogwheel)`
    width: 45%;
    left: 0;
    top:  5%;

    @media (max-width: 375px) {  
        top: 10%;
    }

    @media (max-width: 325px) {  
        top: 20%;
        left: 5%;
    }
`)

export const RightYellowCogwheel = motion(styled(Cogwheel)`
    width: 35%;
    bottom: 10%;
    left: 5%; 
    
    @media (max-width: 425px) {  
        bottom: 20%;
    }

    @media (max-width: 375px) {  
        bottom: 25%;
    }
`)

export const LeftGreyCogwheel = motion(styled(Cogwheel)`    
    width: 55%;
    bottom: 0;  

    @media (max-width: 425px) {  
        bottom: 10%;
        width: 50%;
        left: 5%
    }

    @media (max-width: 375px) {  
        bottom: 18%;
    }
        
    @media (max-width: 325px) {  
        bottom: 20%;
    }
`)

export const LeftRedCogwheel = motion(styled(Cogwheel)`
    width: 45%;
    right: 0;
    top:  5%;

    @media (max-width: 375px) {  
        top: 10%;
    }

    @media (max-width: 325px) {  
        top: 20%;
        right: 5%;
    }
`)

export const LeftYellowCogwheel = motion(styled(Cogwheel)`
    width: 35%;
    bottom: 10%;    
    right: 5%;

    @media (max-width: 425px) {  
        bottom: 20%;
    }

    @media (max-width: 375px) {  
        bottom: 25%;
    }

`)

export const CogwheelsContainer = styled.div`
    width: 220px;
    height: 220px;
    position: relative;

    @media (max-width: 1440px) {
        width: 200px;
        height: 200px;
    }

    @media (max-width: 1024px) {
        width: 175px;
        height: 175px;
    }

    @media (max-width: 700px) {
        width: 160px;
        height: 160px;
    }

    @media (max-width: 600px) {
        width: 150px;
        height: 150px;
    }

    @media (max-width: 500px) {
        width: 130px;
        height: 130px;
    }

    @media (max-width: 425px) {
        width: 105px;
        height: 125px;
    }

    @media (max-width: 375px) {
        width: 90px;
    }

    @media (max-width: 350px) {
        width: 80px;
    }
`