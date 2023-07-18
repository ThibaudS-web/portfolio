import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import { BlocPage } from "../home/homeStyles"

function Projects() {
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
                    avatarPaths={["\\assets\\png\\avatar_open_eyes.png",
                        "\\assets\\png\\avatar_wink.png"]}
                />
            </BlocPage>

        </>
    )
}

export default Projects