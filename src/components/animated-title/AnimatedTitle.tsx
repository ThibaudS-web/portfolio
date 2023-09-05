import {
    AnimatedTitleContainer,
    CogwheelsContainer,
    RightGreyCogwheel,
    RightRedCogwheel,
    TitleContainer,
    RightYellowCogwheel,
    Title,
    Avatar,
    LeftGreyCogwheel,
    LeftRedCogwheel,
    LeftYellowCogwheel,
} from "./animatedTitleStyle"
import { AnimatedHeadProps } from "../../props"
import useCogwheelAnimation from "../../hooks/title-animation/useCogwheelAnimation"
import useTitleAnimation from "../../hooks/title-animation/useTitleAnimation"
import useAvatarAnimation from "../../hooks/title-animation/useAvatarAnimation"
import { useEffect, useState } from "react"

function AnimatedTitle(props: AnimatedHeadProps) {
    const { textVariants, avatarPaths } = props
    const [isAvatarDisplay, setIsAvatarDisplay] = useState(true)

    const handleAvatarDisplay = () => {
        if (innerWidth <= 500) {
            setIsAvatarDisplay(false)
        } else {
            setIsAvatarDisplay(true)
        }
    }

    const transitionOptions = {
        duration: 3,
        delay: 1.5,
    }

    const {
        handleChangeCogwheelVariants,
        rightCogwheelVariant,
        leftCohwheelVariant
    } = useCogwheelAnimation()

    const {
        titleVariants,
        handleChangeTitleVariants,
        currentIndexTitle
    } = useTitleAnimation()

    const {
        avatarVariants,
        handleChangeAvatarVariants,
        currentIndexAvatar
    } = useAvatarAnimation()

    useEffect(() => {
        handleAvatarDisplay()
        window.addEventListener('resize', handleAvatarDisplay)
    }, [isAvatarDisplay])

    return (
        <>
            <AnimatedTitleContainer>
                <CogwheelsContainer>
                    <LeftGreyCogwheel
                        alt="visual animation cogwheel"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\webp\cogwheels\cogwheelb_grey.webp"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <LeftRedCogwheel
                        alt="visual animation cogwheel"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\webp\cogwheels\cogwheelb_red.webp"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <LeftYellowCogwheel
                        alt="visual animation cogwheel"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\webp\cogwheels\cogwheelb_yellow.webp"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                </CogwheelsContainer>
                <TitleContainer $isAvatarDisplay={isAvatarDisplay}>
                    <Title
                        $isAvatarDisplay={isAvatarDisplay}
                        initial="initial"
                        animate="animate"
                        variants={titleVariants}
                        transition={transitionOptions}
                        onAnimationComplete={() => handleChangeTitleVariants(textVariants)}
                    >
                        {textVariants[currentIndexTitle]}
                    </Title>
                    <Avatar
                        $isAvatarDisplay={isAvatarDisplay}
                        alt="visual animation avatar"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={avatarVariants}
                        transition={transitionOptions}
                        onAnimationComplete={() => handleChangeAvatarVariants(avatarPaths)}
                        src={`${avatarPaths[currentIndexAvatar]}`}
                    />
                </TitleContainer>
                <CogwheelsContainer>
                    <RightGreyCogwheel
                        alt="visual animation cogwheel"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\webp\cogwheels\cogwheelb_grey.webp"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <RightRedCogwheel
                        alt="visual animation cogwheel"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\webp\cogwheels\cogwheelb_red.webp"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <RightYellowCogwheel
                        alt="visual animation cogwheel"
                        aria-hidden="true"
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\webp\cogwheels\cogwheelb_yellow.webp"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                </CogwheelsContainer>
            </AnimatedTitleContainer >
        </>
    )
}

export default AnimatedTitle