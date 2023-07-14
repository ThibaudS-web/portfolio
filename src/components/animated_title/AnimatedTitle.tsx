import { useState } from "react";
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
import AnimatedHeadProps from "../../props";

function AnimatedTitle(props: AnimatedHeadProps) {
    const { textVariants, avatarPaths } = props
    const [currentIndexTitle, setCurrentIndexTitle] = useState(0)
    const [currentIndexAvatar, setCurrentIndexAvatar] = useState(0)
    const [titleKey, setTitleKey] = useState(0);
    const [titleVariants, setTitleVariants] = useState({
        initial: { x: "0%", opacity: 1 },
        animate: {
            x: "-100%",
            opacity: 0
        }
    })
    const [avatarKey, setAvatarKey] = useState(0);
    const [avatarVariants, setAvatarVariants] = useState({
        initial: { x: "0%", opacity: 1 },
        animate: {
            x: "100%",
            opacity: 0
        }
    })


    const [leftCohwheelVariant, setLeftCogwheelVariant] = useState({
        initial: { rotate: "1turn" },
        animate: { rotate: "0turn" },
    })

    const [rightCogwheelVariant, setRightCogwheelVariant] = useState({
        initial: { rotate: "0turn" },
        animate: { rotate: "1turn" },
    })

    const handleSetCurrentIndexTitle = () => {
        setCurrentIndexTitle((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex === textVariants.length) return 0
            return nextIndex
        })
    }

    const handleSetCurrentIndexAvatar = () => {
        setCurrentIndexAvatar((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex === avatarPaths.length) return 0
            return nextIndex
        })
    }

    const handleChangeTitleVariants = () => {
        if (titleVariants.initial.x === "0%") handleSetCurrentIndexTitle()

        setTitleVariants({
            initial: { x: titleKey % 2 === 0 ? "-100%" : "0%", opacity: titleKey % 2 === 0 ? 1 : 0 },
            animate: {
                x: titleKey % 2 === 0 ? "0%" : "-100%",
                opacity: titleKey % 2 === 0 ? 1 : 0
            }
        })

        setTitleKey((prevValue) => prevValue + 1)
    }

    const handleChangeAvatarVariants = () => {
        if (avatarVariants.initial.x === "0%") handleSetCurrentIndexAvatar()

        setAvatarVariants({
            initial: { x: avatarKey % 2 === 0 ? "100%" : "0%", opacity: avatarKey % 2 === 0 ? 1 : 0 },
            animate: {
                x: avatarKey % 2 === 0 ? "0%" : "100%",
                opacity: avatarKey % 2 === 0 ? 1 : 0
            }
        })

        setAvatarKey((prevValue) => prevValue + 1)
    }

    const handleChangeCogwheelVariants = (direction: "left" | "right") => {
        const isRotate = leftCohwheelVariant.initial.rotate === "1turn"
        switch (direction) {
            case "left":
                setLeftCogwheelVariant({
                    initial: { rotate: isRotate ? "0turn" : "1turn" },
                    animate: { rotate: isRotate ? "1turn" : "0turn" },
                })
                break;
            case "right":
                setRightCogwheelVariant({
                    initial: { rotate: isRotate ? "1turn" : "0turn" },
                    animate: { rotate: isRotate ? "0turn" : "1turn" },
                })
                break;
        }
    }

    return (
        <>
            <AnimatedTitleContainer>

                <CogwheelsContainer>
                    <GreyCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={{ duration: 3, delay: 1.5 }}
                        src="\assets\png\cogwheelb_grey.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <RedCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={{ duration: 3, delay: 1.5 }}
                        src="\assets\png\cogwheelb_red.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                    <YellowCogwheel
                        initial="initial"
                        animate="animate"
                        variants={leftCohwheelVariant}
                        transition={{ duration: 3, delay: 1.5 }}
                        src="\assets\png\cogwheelb_yellow.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants('left')}
                    />
                </CogwheelsContainer>

                <TitleContainer>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={titleVariants}
                        transition={{ duration: 3, delay: 1.5 }}
                        onAnimationComplete={handleChangeTitleVariants}
                    >
                        <Title>{textVariants[currentIndexTitle]}</Title>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={avatarVariants}
                        transition={{ duration: 3, delay: 1.5 }}
                        onAnimationComplete={handleChangeAvatarVariants}
                    >
                        <Avatar src={`${avatarPaths[currentIndexAvatar]}`} />
                    </motion.div>
                </TitleContainer>

                <CogwheelsContainer $rotate>
                    <GreyCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={{ duration: 3, delay: 1.5 }}
                        src="\assets\png\cogwheelb_grey.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <RedCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={{ duration: 3, delay: 1.5 }}
                        src="\assets\png\cogwheelb_red.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                    <YellowCogwheel
                        initial="initial"
                        animate="animate"
                        variants={rightCogwheelVariant}
                        transition={{ duration: 3, delay: 1.5 }}
                        src="\assets\png\cogwheelb_yellow.png"
                        onAnimationComplete={() => handleChangeCogwheelVariants("right")}
                    />
                </CogwheelsContainer>

            </AnimatedTitleContainer >

        </>
    )
}

export default AnimatedTitle