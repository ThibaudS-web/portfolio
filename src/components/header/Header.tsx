import { useState } from "react";
import {
    Navigation,
    LeftCogwheel,
    RightCogwheel,
    StyledNavLinkHome,
    StyledNavLinkProject
} from "./headerStyle"

function Header() {
    const [isHovered, setIsHovered] = useState({ right: false, left: false });

    const handleMouseEnter = (side: string) => {
        setIsHovered(prevState => ({ ...prevState, [side]: true }));
    };

    const handleMouseLeave = (side: string) => {
        setIsHovered(prevState => ({ ...prevState, [side]: false }));
    };

    return (
        <Navigation>
            <LeftCogwheel
                $hovered={isHovered.left}
                src="\assets\png\cogwheel_shadow.png"
                alt="Accueil"
            />
            <StyledNavLinkHome
                onMouseEnter={() => handleMouseEnter('left')}
                onMouseLeave={() => handleMouseLeave('left')}
                to='/'
            >
                ACCUEIL
            </StyledNavLinkHome>

            <RightCogwheel
                $hovered={isHovered.right}
                src="\assets\png\cogwheel_shadow.png"
                alt="Accueil"
            />
            <StyledNavLinkProject
                onMouseEnter={() => handleMouseEnter('right')}
                onMouseLeave={() => handleMouseLeave('right')}
                to='/projects'
            >
                PROJETS
            </StyledNavLinkProject>

        </Navigation>
    )
}

export default Header