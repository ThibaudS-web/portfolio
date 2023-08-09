import { styled } from "styled-components"

export const FullProjectTitle = styled.h1`
    font-family: "inter";
    font-size: 1.5rem;
    position: relative;
    margin-left: 5px;
    margin-top: 2.5rem;

    &::after {
        content: "";
        display: inline-block; 
        width: 45%;
        height: 3px;
        background-color: #000000;
        position: absolute;
        bottom: -10px;
        left: -5px;
    }
`
export const ProjectTitle = styled.span`
    color: #F3A712;
`
export const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2.5rem;
    gap: 2rem;
    font-size: 1.2rem;
`
export const ProjectImgContainer = styled.div`
    width: 450px;
    min-width: 300px;
    height: 300px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    font-family: "inter";
    flex-shrink: 0;

     &::after {
        content: "Cliquer pour aggrandir";
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

    &:hover&::after {  
        opacity: 0.7;
    }
`
export const ProjectInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 300px;
`
export const ProjectImg = styled.img`
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 100%;
`
export const ProjectTechno = styled.img`
    width: 50px;
    height: 50px;
`
export const ProjectTechnosContainer = styled.div`
    display: flex;
    gap: 15px;
`
export const ProjectDesc = styled.p`
    text-align: justify;
    width: 80%;
    line-height: 1.8rem;
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 5%;
`