import { useState } from "react"
import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
// import useProjectsData from "../../hooks/useProjectsData"
import { BlocPage } from "../home/homeStyles"
import { CustomSelect, Options, SelectOption, Option } from "./projectsStyle"
import Arrow from "../../components/svg/ArrowSelect"
import { Variants, motion } from "framer-motion"

function Projects() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    // const { data } = useProjectsData()

    const handleOpenSelect = () => {
        setIsOpen(!isOpen)
    }

    const optionVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    const arrowVariants: Variants = {
        closed: {
            rotate: 180,
            transition: {
                type: "spring",
                stiffness: 250,
                damping: 15
            }
        },
        open: {
            rotate: 0,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 250,
                damping: 15
            }
        }
    }

    console.log(isOpen)

    return (
        <>
            <BlocPage>
                <AnimatedTitle
                    textVariants={[
                        "MES PROJETS",
                        <span key="on-text">
                            APPUYER SUR <span style={{ color: "#467536" }}>ON</span> POUR DEMARRER
                        </span>
                    ]}
                    avatarPaths={["assets/png/avatar_open_eyes.png",
                        "assets/png/avatar_wink.png"]}
                />
                <CustomSelect
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <SelectOption
                        onClick={handleOpenSelect}
                        whileTap={{ scale: 0.97 }}

                    >
                        Trier les projets
                        <motion.div
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            variants={arrowVariants}
                        >
                            <Arrow />
                        </motion.div>
                    </SelectOption>
                    {isOpen ?
                        <Options>
                            <Option
                                initial="closed"
                                animate="open"
                                variants={optionVariants}
                            >
                                Projets de formation
                            </Option>
                            <Option
                                initial="closed"
                                animate="open"
                                variants={optionVariants}
                            >
                                Projets personnels
                            </Option>
                        </Options>
                        :
                        null
                    }
                </CustomSelect>
            </BlocPage>
        </>
    )
}

export default Projects