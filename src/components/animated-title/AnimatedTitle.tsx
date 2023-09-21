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
import { cubicBezier } from "framer-motion"

function AnimatedTitle(props: AnimatedHeadProps) {
    const { textVariants, avatarPaths } = props

    const transitionOptions = {
        duration: 2.8,
        delay: 1.5,
        ease: cubicBezier(.6, .13, .34, 1.01)
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
                <TitleContainer>
                    <Title
                        initial="initial"
                        animate="animate"
                        variants={titleVariants}
                        transition={transitionOptions}
                        onAnimationComplete={() => handleChangeTitleVariants(textVariants)}
                    >
                        {textVariants[currentIndexTitle]}
                    </Title>
                    <Avatar
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