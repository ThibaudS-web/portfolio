import { Btntext, Text, Label, BtnRipple, AnimatedBackground, FontIcon, LinkContainer, ButtonContainer } from "./ButtonAnimatedStyles"
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons"
import { AnimatedButtonProps } from "../../props"

function ButtonAnimated(props: AnimatedButtonProps) {
    let {
        dataAttrText,
        iconLabel,
        urlPath,
        text,
        onClick,
        bgColor,
        textColor
    } = props

    let color: string
    let dynamicIconName: IconProp

    library.add(faLinkedin, faGithub, faEnvelope, faXmark)

    const handleClick = () => {
        if (onClick) onClick()
    }

    switch (iconLabel) {
        case 'linkedin':
            color = "#0B66C2"
            dynamicIconName = [faLinkedin.prefix, iconLabel]
            break
        case 'github':
            color = "#1F2327"
            dynamicIconName = [faGithub.prefix, iconLabel]
            break
        case 'envelope':
            color = "#F3A712"
            dynamicIconName = [faEnvelope.prefix, iconLabel]
            break
        default:
            color = bgColor
            dynamicIconName = [faXmark.prefix, "xmark"]
    }

    const buttonJSXContent = urlPath ? (
        <LinkContainer target="bank" theme={color} href={urlPath}>
            <Btntext className="my-btn_cta-title">
                <Label data-text={dataAttrText}>
                    {iconLabel ?
                        <FontIcon theme={color} icon={dynamicIconName} />
                        :
                        <Text theme={textColor || "#000000"}>{text}</Text>
                    }
                </Label>
            </Btntext>
            <BtnRipple className="my-btn_cta-ripple">
                <AnimatedBackground theme={color}></AnimatedBackground>
            </BtnRipple>
        </LinkContainer>
    ) : (
        <ButtonContainer theme={bgColor || "#000000"} onClick={handleClick}>
            <Btntext className="my-btn_cta-title">
                <Label data-text={dataAttrText}>
                    {iconLabel ?
                        <FontIcon theme={color} icon={dynamicIconName} />
                        :
                        <Text theme={textColor || "#000000"}>{text}</Text>
                    }
                </Label>
            </Btntext>
            <BtnRipple className="my-btn_cta-ripple">
                <AnimatedBackground theme={bgColor || "#000000"}></AnimatedBackground>
            </BtnRipple>
        </ButtonContainer>
    )

    return buttonJSXContent
}

export default ButtonAnimated