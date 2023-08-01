import { styled } from "styled-components"
import { motion } from "framer-motion"


export const CustomSelect = motion(styled.div`
    width: 350px;
    margin-top: 4rem;
    font-family: "Inter";
    font-size: 1.3em;
    color: #F5F5F5;
    cursor: pointer;
    user-select: none;
`)

export const SelectOption = motion(styled.div`
    padding: 0 3rem;
    background-color: #A22C29;
    border-radius: 25px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
`)

export const Options = styled.ul`
    margin-top: 10px;
    border-radius: 25px;
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
    padding:0;
    background-color: #A22C29;
`

export const Option = motion(styled.li` 
    height: 60px;
    display: flex;
    padding: 0 3rem;
    align-items: center;
    
    &:first-child {
        border-radius: 25px 25px 0 0;
    }

    &:last-child {
        border-radius: 0 0 25px 25px;
    }

    &:hover {
        color: #A22C29;
        background-color: white;
    }
`)
