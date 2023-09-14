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
    animation: ${rotate} 10s linear infinite;
    animation-play-state: paused;
    ${props => props.$hovered && css`
        animation-play-state: running;
    `}

    @media (max-width: 1440px) {
        width: 380px;
        top: -10rem;
    }

    @media (max-width: 900px) {
        display: none;
    }
`

export const LeftCogwheel = styled(GlobalCogwheel)`
    left: -10rem; 

    @media (max-width: 1440px) {
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

    @media (max-width: 1440px) {
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
    overflow: hidden;
    position: relative;
    display: flex; 
    justify-content: center;
    
    @media (max-width: 1440px) {
        height: 220px;
    }

    @media (max-width: 900px) {
        height: 150px;
    }

    @media (max-width: 500px) {
        height: 100px;
    }
`

const NavLinkCustomGlobal = css`
    font-size: 2.5rem;
    color: #000;
    text-decoration: none;
    position: absolute;
    top: 2rem;
    
    &.active {
        color: #F3A712;
    }

    @media (max-width: 1440px) {
        font-size: 2rem;
    }

    @media (max-width: 900px) {
        top: 3rem;
        font-size: 1.6rem;
    }

    @media (max-width: 500px) {
        font-size: 1.4rem;
        top: 2.5rem;
    }

    @media (max-width: 320px) {
        font-size: 1.2rem;
    }
`

export const StyledNavLinkHome = styled(NavLink) <{ $hovered: boolean }>`
    ${NavLinkCustomGlobal}
    left: 2.8rem;

    @media (max-width: 1440px) {
         left: 1.8rem;
    }
    
    @media (min-width: 500px) and (max-width: 900px) {
         left: 2.8rem;
    }

    @media (max-width: 320px) {
        left: 1.5rem;
    }
`

export const StyledNavLinkProject = styled(NavLink)`
    ${NavLinkCustomGlobal}
    right: 2.8rem;

    @media (max-width: 1440px) {
      right: 1.8rem;
    }

    @media (min-width: 500px) and (max-width: 900px) {
            right: 2.8rem;
    }

    @media (max-width: 320px) {
        right: 1.5rem;
    }
`

export const Logo = styled.img`
    width: 260px;
    height: 158px;
    margin-top: 1rem;

    @media (max-width: 1440px) {
        width: 200px;
        height: 122px;
    }

    @media (max-width: 900px) {
        width: 160px;
        height: 97px;
    }

    
    @media (max-width: 500px) {
        width: 100px;
        height: 61px;
    }
`