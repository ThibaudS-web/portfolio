import {
    Navigation,
    LeftCogwheel,
    RightCogwheel,
    StyledNavLinkHome,
    CogwheelContainer,
    StyledNavLinkProject
} from "./headerStyle"

function Header() {
    return (
        <Navigation>
            <CogwheelContainer>
                <LeftCogwheel src="\assets\png\cogwheel.png" alt="Accueil" />
                <StyledNavLinkHome to='/'>
                    ACCUEIL
                </StyledNavLinkHome>
            </CogwheelContainer>

            <CogwheelContainer>
                <RightCogwheel src="\assets\png\cogwheel.png" alt="Accueil" />
                <StyledNavLinkProject to='/projects'>
                    PROJETS
                </StyledNavLinkProject>
            </CogwheelContainer>
        </Navigation>
    )
}

export default Header