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
const GlobalCogwheel = styled.img<{ $hovered: boolean }>`
    width: 512px;
    position: absolute;
    top: -14rem;
    transform-origin: center;
    animation: ${rotate} 5s linear infinite;
    animation-play-state: paused;
    ${props => props.$hovered && css`
        animation-play-state: running;
    `}
 
`
export const Navigation = styled.nav`
    width:100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    /* display: flex;
    justify-content: space-between; */
`
// export const CogwheelContainer = styled.div`
//     position: relative;
//     width: 512px;
//     height: 100%;
// `

const NavLinkCustomGlobal = css`
    font-size: 2.5rem;
    color: #000;
    text-decoration: none;
    position: absolute;
`
export const LeftCogwheel = styled(GlobalCogwheel)`
    left: -10rem; 
`
export const RightCogwheel = styled(GlobalCogwheel)`
    right: -10rem;
`

export const StyledNavLinkHome = styled(NavLink) <{ $hovered: boolean }>`
    ${NavLinkCustomGlobal}
    left: 2.7rem;
    top: 2rem;
`
export const StyledNavLinkProject = styled(NavLink)`
    ${NavLinkCustomGlobal}
    right: 2.7rem;
    top: 2rem;
`


