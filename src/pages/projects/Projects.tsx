import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
// import useProjectsData from "../../hooks/useProjectsData"
import { BlocPage } from "../home/homeStyles"
import CustomSelect from "../../components/select_project_type/CustomSelect"
import {
    FullProjectTitle,
    ProjectContainer,
    ProjectTitle, ProjectImg,
    ProjectImgContainer,
    ProjectDesc,
    ProjectTechnosContainer,
    ProjectTechno,
    ProjectInfos,
    ButtonContainer
} from "./projectsStyle"
import Button from "../../components/button/Button"
import GithubIcon from "../../components/svg/GithubIcon"
import { TextOnBtn } from "../../components/button/buttonStyle"

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
                    <ProjectInfos>
                        <ProjectTechnosContainer>
                            {/* need to map here */}
                            <ProjectTechno src="assets/technos/typescript.png" />
                            <ProjectTechno src="assets/technos/css.png" />
                        </ProjectTechnosContainer>
                        <ProjectDesc>
                            En tant que développeur junior passionné par la musique, j'ai créé cette application musicale interactive. La principale caractéristique sont les lecteurs audios personnalisés avec la possibilité d'avancer la lecture, passer au titre suivant / précédent, le changement de style musicale et l'intéraction entre les lecteurs.
                        </ProjectDesc>
                        <ButtonContainer>
                            <Button
                                link="https://github.com/ThibaudS-web/music_sim"
                            >
                                <TextOnBtn>Code</TextOnBtn>
                                <GithubIcon width="30px" height="30px" />
                            </Button>
                            <Button
                                link="https://thibauds-web.github.io/music_sim/"
                            >
                                <TextOnBtn>Live Demo</TextOnBtn>
                                <GithubIcon width="30px" height="30px" />
                            </Button>
                        </ButtonContainer>
                    </ProjectInfos>
                </ProjectContainer>
            </BlocPage>
        </>
    )
}

export default Projects