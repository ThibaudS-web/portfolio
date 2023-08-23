import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
// import useProjectsData from "../../hooks/useProjectsData"
import CustomSelect from "../../components/select_project_type/CustomSelect"
import {
    FullProjectTitle,
    ProjectHeader,
    ProjectTitle, ProjectImg,
    ProjectImgContainer,
    ProjectDesc,
    ProjectTechnosContainer,
    ProjectTechno,
    ProjectInfos,
    ButtonContainer
} from "./projectsStyle"
import Button from "../../components/button/Button"
import GithubIcon from "../../components/svg/github-icon/GithubIcon"
import { TextOnBtn } from "../../components/button/buttonStyle"
import useProjectsData from "../../hooks/useProjectsData"

function Projects() {

    const { data } = useProjectsData()
    // TODO: Go to implement text option on props CustomSelect



    return (
        <>
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
            <ProjectHeader>
                <ProjectImgContainer>
                    <ProjectImg src="assets/png/jazzam_pic.png"></ProjectImg>
                </ProjectImgContainer>
                <ProjectInfos>
                    <ProjectTechnosContainer>
                        {/* need to map here */}
                        <ProjectTechno src="assets/technos/typescript.png" />
                        <ProjectTechno src="assets/technos/css.png" />
                    </ProjectTechnosContainer>

                    <ButtonContainer>
                        <Button
                            link="https://github.com/ThibaudS-web/music_sim"
                        >
                            <TextOnBtn>Code</TextOnBtn>
                            <GithubIcon $isProjectPage />
                        </Button>
                        <Button
                            link="https://thibauds-web.github.io/music_sim/"
                        >
                            <TextOnBtn>Demo</TextOnBtn>
                            <GithubIcon $isProjectPage />
                        </Button>
                    </ButtonContainer>
                </ProjectInfos>
            </ProjectHeader>
            <ProjectDesc>
                En tant que développeur junior passionné par la musique, j'ai créé cette application musicale interactive. La principale caractéristique sont les lecteurs audios personnalisés avec la possibilité d'avancer la lecture, passer au titre suivant / précédent, le changement de style musicale et l'intéraction entre les lecteurs.
            </ProjectDesc>
        </>
    )
}

export default Projects