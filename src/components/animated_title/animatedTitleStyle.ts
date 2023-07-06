import { styled, css } from "styled-components"

const Cogwheel = styled.img`
    position: absolute;
`
export const RedCogwheel = styled(Cogwheel)`
    width: 120px;
    right: 0;
`
export const GreyCogwheel = styled(Cogwheel)`
    width: 140px;
    bottom: 0;
`
export const YellowCogwheel = styled(Cogwheel)`
    width: 80px;
    bottom: 30px;
    right: 21px;
`

export const AnimatedTitleContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`
export const CogwheelsContainer = styled.div<{ $rotate?: boolean }>`
    width: 240px;
    height: 240px;
    /* border: 2px solid green; */
    position: relative;
    ${(props) => props.$rotate && css`transform: rotate(90deg)`}
`
export const TitleContainer = styled.div`
    flex-grow: 0.9;
    border: 2px solid yellow;
`

