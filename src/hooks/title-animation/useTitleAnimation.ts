import { useState } from "react";
import { TextVariant } from "../../props";

const useTitleAnimation = () => {
    const [currentIndexTitle, setCurrentIndexTitle] = useState(0)
    const [titleKey, setTitleKey] = useState(0);
    const [titleVariants, setTitleVariants] = useState({
        initial: { x: "0%", opacity: 1 },
        animate: {
            x: "-100%",
            opacity: 0
        }
    })


    const handleSetCurrentIndexTitle = (textVariants: TextVariant) => {
        setCurrentIndexTitle((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex === textVariants?.length) return 0
            return nextIndex
        })
    }

    const handleChangeTitleVariants = (textVariants: TextVariant) => {
        if (titleVariants.initial.x === "0%") handleSetCurrentIndexTitle(textVariants)

        setTitleVariants({
            initial: { x: titleKey % 2 === 0 ? "-100%" : "0%", opacity: titleKey % 2 === 0 ? 1 : 0 },
            animate: {
                x: titleKey % 2 === 0 ? "0%" : "-100%",
                opacity: titleKey % 2 === 0 ? 1 : 0
            }
        })

        setTitleKey((prevValue) => prevValue + 1)
    }

    return { titleVariants, handleChangeTitleVariants, currentIndexTitle }

}

export default useTitleAnimation