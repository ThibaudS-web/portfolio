import { useState } from "react"
import { Project } from "../../props"
import { motion } from "framer-motion"

const useProjectAnimation = (currentProject: Project | null) => {

    const [title, setTitle] = useState<Array<JSX.Element>>([])

    const letterVariants = {
        visible: (i: number) => ({
            opacity: 1,
            letterSpacing: "0.1rem",
            color: ["#A22C29", "#F3A712", "#A22C29", "#F3A712"],
            transition: {
                delay: i * 0.050
            }
        }),
        hidden: { opacity: 0, letterSpacing: "-1.5rem" }
    }

    const displayTitleAnimation = () => {
        if (currentProject) {
            let textAnimate = currentProject?.name.split("").map((char, index) => {
                return <motion.span
                    animate="visible"
                    initial="hidden"
                    custom={index}
                    key={index}
                    variants={letterVariants}
                >
                    {char.trim().length === 0 ? <span>&nbsp;</span> : char}
                </motion.span>
            })

            setTitle(textAnimate)
        }
    }

    return {
        displayTitleAnimation,
        title
    }
}

export default useProjectAnimation