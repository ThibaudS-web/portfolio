import { useState } from "react";

const useCogwheelAnimation = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [leftCohwheelVariant, setLeftCogwheelVariant] = useState({
        initial: { rotate: "1turn" },
        animate: { rotate: "0turn" },
    })
    const [rightCogwheelVariant, setRightCogwheelVariant] = useState({
        initial: { rotate: "0turn" },
        animate: { rotate: "1turn" },
    })

    const handleChangeCogwheel = () => {
        setIsRotated((prev) => !prev)
    };

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



    return { isRotated, handleChangeCogwheel, handleChangeCogwheelVariants, leftCohwheelVariant, rightCogwheelVariant }
};

export default useCogwheelAnimation