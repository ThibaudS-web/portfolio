import styled, { css, keyframes } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const rippleIn = keyframes`
  0% {
    transform: translateY(-100%);
    border-radius: 100%;
  }
  
  100% {
    transform: translateY(0%);
    border-radius: 0;
  }
`

const globalStyleButtonContent = css`
        margin: 0;
        transition: all 250ms ease-in;
`

const globalStyleButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    height: 60px;
    font-weight: 600;
    width: 150px;
    font-size: 1.2rem;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    font-family: "Inter", sans-serif;

    @media (max-width: 600px) {
        min-width: 75px;
        max-width: 150px;
        height: 40px;
        font-size: 1rem;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            .my-btn_cta-title span::after {
                top: 0;
            }
            .my-btn_cta-title span svg, p {
                transform: translateY(-100px);
            }
            .my-btn_cta-ripple span {
                animation: ${rippleIn} 0.4s cubic-bezier(0.4,0,0,1);
                transform: translateY(0);
                border-radius: 0;
            }
        } 
    } 
`

export const LinkContainer = styled.a<{ theme: string }>`
    border: 3px solid ${(props) => props.theme};
    ${globalStyleButtonContainer}
`

export const ButtonContainer = styled.button<{ theme: string }>`
    padding: 0;
    border: 3px solid ${(props) => props.theme};
    ${globalStyleButtonContainer}
`

export const Btntext = styled.span`
    width: 100%;
    height: 100%;
`

export const Label = styled.span`
    position: relative;
    width: 100%;
    display: block;
    height: 100%;
    line-height: 60px;

    @media (max-width: 600px) {
        line-height: 40px;
    }

  &::after {
    content: attr(data-text);
    display: block;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100%;
    transition: all 250ms ease-in;
    width: 100%;
    height: 100%;
    color: #F3F3F3;
    font-size: 0.8em;
    z-index: 999;
  }
`

export const BtnRipple = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const FontIcon = styled(FontAwesomeIcon) <{ theme: string }>`
    ${globalStyleButtonContent}
    font-size: 1.2em;
    color: ${(props) => props.theme};
`

export const Text = styled.p<{ theme: string }>`
    ${globalStyleButtonContent}
    font-size: 1em;
    color: ${(props) => props.theme};
`
export const AnimatedBackground = styled.span<{ theme: string }>`
    background-color: ${(props) => props.theme};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
    transform: translateY(150%);
    transition: all 250ms ease-in;
`
