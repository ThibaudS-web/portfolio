import {
    AnimatedTitleContainer,
    CogwheelsContainer,
    GreyCogwheel,
    RedCogwheel,
    TitleContainer,
    YellowCogwheel,
    Title,
    Avatar
} from "./animatedTitleStyle"
import { motion } from "framer-motion"
import AnimatedHeadProps from "../../props"
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
                    <GreyCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheelb_grey.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <RedCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheelb_red.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <YellowCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheelb_yellow.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                </CogwheelsContainer>
                <TitleContainer>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={titleVariants}
                        transition={transitionOptions}
                        onAnimationComplete={() => handleChangeTitleVariants(textVariants)}
                    >
                        <Title>{textVariants[currentIndexTitle]}</Title>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={avatarVariants}
                        transition={transitionOptions}
                        onAnimationComplete={() => handleChangeAvatarVariants(avatarPaths)}
                    >
                        <Avatar src={`${avatarPaths[currentIndexAvatar]}`} />
                    </motion.div>
                </TitleContainer>
                <CogwheelsContainer $rotate>
                    <GreyCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheelb_grey.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <RedCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheelb_red.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <YellowCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={transitionOptions}
                        src="\assets\png\cogwheelb_yellow.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                </CogwheelsContainer>
            </AnimatedTitleContainer >
        </>
    )
}

export default AnimatedTitle