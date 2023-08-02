import { styled } from "styled-components"
import { motion } from "framer-motion"


export const SelectContainer = motion(styled.div`
    width: 350px;
    margin-top: 2.5rem;
    font-family: "Inter";
    font-size: 1.2em;
    color: #F5F5F5;
    cursor: pointer;
    user-select: none;
    position: relative;
`)

export const SelectOption = motion(styled.div`
    padding: 0 3rem;
    background-color: #A22C29;
    border-radius: 15px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
`)

export const Options = styled.ul`
    width: 100%;
    margin-top: 10px;
    border-radius: 15px;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
    padding:0;
    background-color: #A22C29;
    position: absolute;
    z-index: 999;
`

export const Option = motion(styled.li` 
    height: 50px;
    display: flex;
    padding: 0 3rem;
    align-items: center;
    
    &:first-child {
        border-radius: 15px 15px 0 0;
    }

    &:last-child {
        border-radius: 0 0 15px 15px;
    }

    &:hover {
        color: #A22C29;
        background-color: white;
    }
`)
