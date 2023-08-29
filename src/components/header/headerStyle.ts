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

    @media (max-width: 1024px) {
        width: 380px;
        top: -10rem;
    }
    
    @media (max-width: 768px) {
        width: 300px;
        top: -7rem;
    }

    @media (max-width: 425px) {
        width: 250px;
        top: -6rem;
    }

    @media (max-width: 320px) {
        width: 220px;
        top: -5.5rem;
    }
`
export const LeftCogwheel = styled(GlobalCogwheel)`
    left: -10rem; 

    @media (max-width: 1024px) {
        left: -8rem; 
    }

    @media (max-width: 768px) {
        left: -7rem;
    }

    @media (max-width: 425px) {
        left: -6rem;
    }

    @media (max-width: 320px) {
        left: -5rem;
    }
`
export const RightCogwheel = styled(GlobalCogwheel)`
    right: -10rem;

    @media (max-width: 1024px) {
        right: -8rem;
    }

    @media (max-width: 768px) {
        right: -7rem;
    }

    @media (max-width: 425px) {
        right: -6rem;
    }

    @media (max-width: 320px) {
        right: -5rem;
    }
`
export const Navigation = styled.nav`
    width:100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    @media (max-width: 1024px) {
        height: 220px;
    }

    @media (max-width: 425px) {
        height: 160px;
    }
`
const NavLinkCustomGlobal = css`
    font-size: 2.5rem;
    color: #000;
    text-decoration: none;
    position: absolute;
    top: 2rem;

    @media (max-width: 1024px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }

    @media (max-width: 425px) {
        font-size: 1.4rem;
        top: 1.5rem;
    }

    @media (max-width: 320px) {
        top: 1.3rem;
        font-size: 1.2rem;
    }
`
export const StyledNavLinkHome = styled(NavLink) <{ $hovered: boolean }>`
    ${NavLinkCustomGlobal}
    left: 2.8rem;

    @media (max-width: 1024px) {
         left: 1.8rem;
    }
    
    @media (max-width: 768px) {
         left: 0.6rem;
    }
`
export const StyledNavLinkProject = styled(NavLink)`
    ${NavLinkCustomGlobal}
    right: 2.8rem;

    @media (max-width: 1024px) {
      right: 1.8rem;
    }

    @media (max-width: 768px) {
        right: 0.6rem;
    }
`