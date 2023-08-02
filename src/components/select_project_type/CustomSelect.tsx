import { motion, Variants } from "framer-motion"
import { useState } from "react"
import { Options, SelectOption, SelectContainer, Option } from "./selectStyle"
import Arrow from "../svg/ArrowSelect"

function CustomSelect() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState("Trier les projets")

    const handleOpenSelect = () => {
        setIsOpen(!isOpen)
        setSelectedOption("Trier les projets")
    }

    const handleSelectedOption = (option: string) => {
        setSelectedOption(option)
        setIsOpen(false)
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

    return (
        <>
            <SelectContainer
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <SelectOption
                    onClick={handleOpenSelect}
                    whileTap={{ scale: 0.97 }}

                >
                    {selectedOption}
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
                            onClick={() => handleSelectedOption("Projets de formation")}
                            initial="closed"
                            animate="open"
                            variants={optionVariants}
                        >
                            Projets de formation
                        </Option>
                        <Option
                            onClick={() => handleSelectedOption("Projets personnels")}
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
            </SelectContainer>
        </>
    )
}

export default CustomSelect