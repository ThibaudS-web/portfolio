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
    const [animateKey, setAnimateKey] = useState(0);
    const [variants, setVariants] = useState({
        initial: { x: "0%" },
        animate: {
            x: ["0%", "-100%"]
        }
    })

    const handleSetCurrentIndex = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex === textVariants.length) return 0
            return nextIndex
        })
    }

    const handleChangeVariants = () => {
        if (variants.initial.x === "0%") handleSetCurrentIndex()
        setVariants({
            initial: { x: animateKey % 2 === 0 ? "-100%" : "0%" },
            animate: {
                x: animateKey % 2 === 0 ? ["-100%", "0%"] : ["0%", "-100%"]
            }
        })
        setAnimateKey((prevKey) => prevKey + 1)
    }

    return <>
        <AnimatedTitleContainer>
            <CogwheelsContainer>
                <GreyCogwheel src="\assets\png\cogwheelb_grey.png" />
                <RedCogwheel src="\assets\png\cogwheelb_red.png" />
                <YellowCogwheel src="\assets\png\cogwheelb_yellow.png" />
            </CogwheelsContainer>
            <TitleContainer>
                <motion.div
                    key={animateKey}
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    transition={{ duration: 3, delay: 1.5 }}
                    onAnimationComplete={handleChangeVariants}
                >
                    <Title>{textVariants[currentIndex]}</Title>
                </motion.div>
                {/* <AvatarOpenEyes src="\assets\png\avatar_open_eyes.png" /> */}
            </TitleContainer>
            <CogwheelsContainer $rotate>
                <GreyCogwheel src="\assets\png\cogwheelb_grey.png" />
                <RedCogwheel src="\assets\png\cogwheelb_red.png" />
                <YellowCogwheel src="\assets\png\cogwheelb_yellow.png" />
            </CogwheelsContainer>
        </AnimatedTitleContainer >
    </>
}

export default AnimatedTitle