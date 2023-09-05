import { motion } from "framer-motion"
import { styled } from "styled-components"

export const HandleProjectsContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    gap: 5vw;
    flex-wrap: wrap;

    @media (max-width: 425px) {
        padding: 0 1rem;
        flex-direction: column;
        margin: 0;
        gap: unset;
        justify-content: center;
    }
`
export const CogwheelCTAContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`
export const FullProjectTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    padding-left: 1.5rem;
    margin-top: 2.5rem;
    position: relative;
   
    
    &::after {
        content: "";
        display: inline-block; 
        width: 450px;
        min-width: 300px;
        height: 3px;
        background-color: #000000;
        position: absolute;
        bottom: -1rem;
        left: 0px;

        @media (min-width: 1440px) {
            width: 40%;
        }

        @media (max-width: 768px) {
            width: 100%;
        }

        @media (max-width: 425px) {
            width: 90%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media (max-width: 425px) {
        font-size: 1.2rem;
        padding-left: 2rem;
        margin-top: 1rem;
    }
`
export const ProjectTitle = motion(styled.span`
    color: #F3A712;
    display: inline-block;
`)

export const ProjectNumber = motion(styled.span`
    margin-right: 10px;
`)

export const ProjectHeader = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2.5rem;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 425px) {
        gap: 1.5rem;
        justify-content: center;
    }
`
export const ProjectImgLink = styled.a`
    width: 550px;
    min-width: 260px;
    height: 350px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    font-family: 'Inter', sans-serif;
    
     &::after {
        content: "Redirection vers la demo";
        color: white;
        display: inline-flex;
        justify-content: center; 
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 0;
        left: 0;
        border-radius: 10px;
        background-color: black;
    }

    :hover&::after {  
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-height: 300px;
    }

    @media (max-width: 425px) {
        width: 85%;
        max-width: 300px;
        max-height: 200px;
    }
`
export const ProjectInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    @media (max-width: 425px) {
        width: 100%;
    }
`
export const ProjectImg = motion(styled.img`
    object-fit: cover;
    object-position: top; 
    border-radius: 10px;
    width: 100%;
    height: 100%;
`)
export const ProjectTechno = motion(styled.img`
    width: 70px;
    height: 70px;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 500px) {
        width: 50px;
        height: 50px;
    }
`)
export const ProjectTechnosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 425px) {
        gap: 1rem;
        justify-content: center;
        padding: 0 1rem;
    }
`
export const ProjectDesc = motion(styled.p`
    text-align: justify;
    width: 100%;
    line-height: 1.8rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin: 2rem 0;
    }

    @media (max-width: 425px) {
        width: auto;
        margin: 0 0 1rem 0;
        padding: 0 1rem;
        font-size: 1rem;
        line-height: 2rem;
    }
`)
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: row;
        margin-top: 2rem;
    }

    @media (max-width: 425px) {
        margin: 1.5rem auto;
    }

    @media (max-width: 350px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;

    }
`
