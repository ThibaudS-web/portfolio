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
`
export const ProjectImgContainer = styled.div`
    width: 450px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    font-family: "inter";

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

    &:hover {
        &::after {
            opacity: 0.5;
        }
    }
`

export const ProjectImg = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 100%;
`