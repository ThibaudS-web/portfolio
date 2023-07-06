import { keyframes, styled, css } from "styled-components";
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
    width:100%;
    height: 300px;
    /* display: flex;
    justify-content: space-between; */
`
// export const CogwheelContainer = styled.div`
//     position: relative;
//     width: 512px;
//     height: 100%;
// `
const GlobalCogwheel = styled.img<{ $hovered: boolean }>`
    position: absolute;
    top: -14rem;
    animation: ${rotate} 5s linear infinite;
    animation-play-state: paused;
    ${props => props.$hovered && css`
        animation-play-state: running;
    `}
`
export const LeftCogwheel = styled(GlobalCogwheel)`
    left: -10rem; 
`
export const RightCogwheel = styled(GlobalCogwheel)`
    right: -10rem;
`
export const StyledNavLinkHome = styled(NavLink)`
    font-size: 2rem;
    color: #000;
    text-decoration: none;
    position: absolute;
    left: 2rem;
    top: 2rem;
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


