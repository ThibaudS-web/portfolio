import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import useProjectsData from "../../hooks/useProjectsData"
import { BlocPage } from "../home/homeStyles"

function Projects() {
    const { data } = useProjectsData()
    console.log(data)

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
                    avatarPaths={["public/assets/png/avatar_open_eyes.png",
                        "public/assets/png/avatar_wink.png"]}
                />
            </BlocPage>
        </>
    )
}

export default Projects