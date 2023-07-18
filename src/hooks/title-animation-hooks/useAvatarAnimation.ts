import { useState } from "react";

const useAvatarAnimation = () => {
    const [currentIndexAvatar, setCurrentIndexAvatar] = useState(0)

    const [avatarKey, setAvatarKey] = useState(0);
    const [avatarVariants, setAvatarVariants] = useState({
        initial: { x: "0%", opacity: 1 },
        animate: {
            x: "100%",
            opacity: 0
        }
    })

    const handleSetCurrentIndexAvatar = (avatarPaths: Array<String>) => {
        setCurrentIndexAvatar((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex === avatarPaths.length) return 0
            return nextIndex
        })
    }

    const handleChangeAvatarVariants = (avatarPaths: Array<String>) => {
        if (avatarVariants.initial.x === "0%") handleSetCurrentIndexAvatar(avatarPaths)

        setAvatarVariants({
            initial: { x: avatarKey % 2 === 0 ? "100%" : "0%", opacity: avatarKey % 2 === 0 ? 1 : 0 },
            animate: {
                x: avatarKey % 2 === 0 ? "0%" : "100%",
                opacity: avatarKey % 2 === 0 ? 1 : 0
            }
        })

        setAvatarKey((prevValue) => prevValue + 1)
    }

    return { avatarVariants, handleChangeAvatarVariants, currentIndexAvatar }
}

export default useAvatarAnimation