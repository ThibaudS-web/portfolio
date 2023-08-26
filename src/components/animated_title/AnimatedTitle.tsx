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
import useCogwheelAnimation from "../../hooks/title-animation-hooks/useCogwheelAnimation"
import useTitleAnimation from "../../hooks/title-animation-hooks/useTitleAnimation"
import useAvatarAnimation from "../../hooks/title-animation-hooks/useAvatarAnimation"

function AnimatedTitle(props: AnimatedHeadProps) {
    const { textVariants, avatarPaths } = props

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


    return (
        <>
            <AnimatedTitleContainer>
                <CogwheelsContainer>
                    <LeftGreyCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheels\cogwheelb_grey.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <LeftRedCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheels\cogwheelb_red.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <LeftYellowCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheels\cogwheelb_yellow.png"
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
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheels\cogwheelb_grey.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <RightRedCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheels\cogwheelb_red.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <RightYellowCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheels\cogwheelb_yellow.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                </CogwheelsContainer>
            </AnimatedTitleContainer >
        </>
    )
}

export default AnimatedTitle