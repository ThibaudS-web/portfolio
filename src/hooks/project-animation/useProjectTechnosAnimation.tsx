import { useState } from "react"
import { Project } from "../../props"
import { ProjectTechno } from "../../pages/projects/projectsStyle"

const useProjectTechnosAnimation = (currentProject: Project | null) => {
    const [refreshKey, setRefreshKey] = useState(0)
    const [technos, setTechnos] = useState<null | Array<JSX.Element>>(null)

    const technosVariants = {
        visible: (i: number) => ({
            opacity: 1,
            scale: [0, 1.2, 1],
            transition: {
                type: "spring",
                stiffness: 200,
                delay: i * 0.2,
            }
        }),
        hidden: { opacity: 0, scale: 0 }
    }

    const displayTechnosAnimation = () => {
        setRefreshKey(prevKey => prevKey + 1)
        if (currentProject) {
            setTechnos(currentProject?.technos.map((techUrl, index) => {
                const technoName = techUrl.split("/").pop()?.replace(".png", "")
                return <ProjectTechno
                    custom={index}
                    variants={technosVariants}
                    animate="visible"
                    initial="hidden"
                    src={techUrl}
                    key={`${technoName}-${refreshKey}`}
                    alt={technoName}
                />
            }))
        }
    }

    return {
        displayTechnosAnimation,
        technos
    }
}

export default useProjectTechnosAnimation