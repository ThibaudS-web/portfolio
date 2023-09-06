import { useEffect, useState } from "react";
import {
    Navigation,
    LeftCogwheel,
    RightCogwheel,
    StyledNavLinkHome,
    StyledNavLinkProject,
    Logo
} from "./headerStyle"

function Header() {
    const [isHovered, setIsHovered] = useState({ right: false, left: false })
    const [location, setLocation] = useState(document.location.pathname)

    const handleStateActiveLink = (to: string) => {
        if (to === "/") {
            setIsHovered({ right: false, left: true })
        }

        if (to === "/projects") {
            setIsHovered({ right: true, left: false })
        }
    }

    useEffect(() => {
        setLocation(document.location.pathname)
        handleStateActiveLink(location)
    }, [location])

    return (
        <Navigation>
            <LeftCogwheel
                $hovered={isHovered.left}
                src="\assets\webp\cogwheels\cogwheel_shadow.webp"
                alt="Accueil"
            />
            <StyledNavLinkHome
                $hovered={isHovered.left}
                onClick={() => handleStateActiveLink('/')}
                // onMouseLeave={() => handleMouseLeave('left')}
                to='/'
            >
                ACCUEIL
            </StyledNavLinkHome>
            <Logo src="/assets/png/logo.png" alt="logo site web" />
            <RightCogwheel
                $hovered={isHovered.right}
                src="\assets\webp\cogwheels\cogwheel_shadow.webp"
                alt="Accueil"
            />
            <StyledNavLinkProject
                onClick={() => handleStateActiveLink('/projects')}
                to='/projects'
            >
                PROJETS
            </StyledNavLinkProject>

        </Navigation>
    )
}

export default Header