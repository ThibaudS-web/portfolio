import { keyframes, styled } from "styled-components";
import { NavLink } from 'react-router-dom';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`



export const Navigation = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const CogwheelContainer = styled.div`
    position: relative;
`
export const LeftCogwheel = styled.img`
    position: absolute;
    left: -10rem;
    top: -14rem;
`

export const RightCogwheel = styled.img`
    position: absolute;
    right: -10rem;
    top: -14rem;
    
`
export const StyledNavLinkHome = styled(NavLink)`
    font-size: 2rem;
    color: #000;
    text-decoration: none;
    position: absolute;
    left: 2rem;
    top: 2rem;
    &:hover ${LeftCogwheel} {
        animation: ${rotate} 3s linear infinite;
    }
`
export const StyledNavLinkProject = styled(NavLink)`
    font-size: 2rem;
    color: #000;
    text-decoration: none;
    position: absolute;
    right: 2rem;
    top: 2rem;
    &:hover {
        transform: rotate(1turn)
    }
`


