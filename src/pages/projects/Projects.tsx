import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
// import useProjectsData from "../../hooks/useProjectsData"
import { BlocPage } from "../home/homeStyles"
import CustomSelect from "../../components/select_project_type/CustomSelect"
import { FullProjectTitle, ProjectContainer, ProjectTitle, ProjectImg, ProjectImgContainer } from "./projectsStyle"

function Projects() {

    // const { data } = useProjectsData()
    // TODO: Go to implement text option on props CustomSelect

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
                <CustomSelect />
                <FullProjectTitle>
                    01. <ProjectTitle>Jazzam - music app</ProjectTitle>
                </FullProjectTitle>
                <ProjectContainer>
                    <ProjectImgContainer>
                        <ProjectImg src="assets/png/jazzam_pic.png"></ProjectImg>
                    </ProjectImgContainer>
                </ProjectContainer>
            </BlocPage>
        </>
    )
}

export default Projects