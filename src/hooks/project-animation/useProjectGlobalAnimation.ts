const useProjectGlobalAnimation = () => {
    const textVariant = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.7,
                stiffness: 80
            }
        },
        hidden: { opacity: 0 }
    }

    const imageVariants = {
        visible: {
            opacity: 1,
            objectPosition: "50% 0%"
        },
        hidden: { opacity: 0, objectPosition: "50% 100%" }
    }

    return {
        textVariant, imageVariants
    }
}

export default useProjectGlobalAnimation