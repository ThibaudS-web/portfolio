import { useState } from "react";
import {
    AnimatedTitleContainer,
    CogwheelsContainer,
    GreyCogwheel,
    RedCogwheel,
    TitleContainer,
    YellowCogwheel,
    Title,
    // AvatarOpenEyes
} from "./animatedTitleStyle"
import { motion } from "framer-motion"

function AnimatedTitle(props: { textVariants: Array<string> }) {
    const { textVariants } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [titleKey, setTitleKey] = useState(0);
    const [titleVariants, setTitleVariants] = useState({
        initial: { x: "0%" },
        animate: {
            x: "-100%"
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

    const handleSetCurrentIndex = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex === textVariants.length) return 0
            return nextIndex
        })
    }

    const handleChangeTitleVariants = () => {
        if (titleVariants.initial.x === "0%") handleSetCurrentIndex()
        setTitleVariants({
            initial: { x: titleKey % 2 === 0 ? "-100%" : "0%" },
            animate: {
                x: titleKey % 2 === 0 ? "0%" : "-100%"
            }
        })
        setTitleKey((prevKey) => prevKey + 1)
        console.count("title animation")
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

    return <>
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
                    <Title>{textVariants[currentIndex]}</Title>
                </motion.div>
                {/* <AvatarOpenEyes src="\assets\png\avatar_open_eyes.png" /> */}
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
}

export default AnimatedTitle