import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
// import useProjectsData from "../../hooks/useProjectsData"
import CustomSelect from "../../components/select_project_type/CustomSelect"
import {
    FullProjectTitle,
    ProjectHeader,
    ProjectTitle,
    ProjectImg,
    ProjectDesc,
    ProjectTechnosContainer,
    ProjectTechno,
    ProjectInfos,
    ButtonContainer,
    ProjectImgLink,
    HandleProjectsContainer,
    CogwheelCTAContainer
} from "./projectsStyle"
import Button from "../../components/button/Button"
import GithubIcon from "../../components/svg/github-icon/GithubIcon"
import { TextOnBtn } from "../../components/button/buttonStyle"
import useProjectsData from "../../hooks/useProjectsData"
import CogwheelCTA from "../../components/svg/cogwheel-cta/CogwheelCTA"
import { useEffect, useState } from "react"
import { Project } from "../../props"

function Projects() {
    const { data, loading, error } = useProjectsData()
    const [project, setProject] = useState<Project | null | undefined>(null)

    useEffect(() => {
        console.log(data, loading)
        if (data) {
            setProject(data[0])
        }
        console.log(project)

    }, [data])

    const findProjectById = (projectId: string | undefined) => {
        if (projectId) {
            console.log(data?.find(pro => pro.id == projectId))
            return data?.find(pro => pro.id == projectId)
        }
    }

    const handleSwapProject = (projectId: string | undefined) => {
        setProject(findProjectById(projectId))
    }

    //TODO: handle title project number and add an icon for demo button
    //TODO: Add animations for project view

    return (
        <>
            <AnimatedTitle
                textVariants={[
                    "MES PROJETS",
                    <span key="on-text">
                        sélectionne un projet avec les <span style={{ color: "#467536" }}>roues</span>
                    </span>
                ]}
                avatarPaths={["assets/png/avatars/avatar_open_eyes.png",
                    "assets/png/avatars/avatar_wink.png"]}
            />
            <HandleProjectsContainer>
                <CustomSelect />
                <CogwheelCTAContainer>
                    {data?.map((project) => {
                        return <CogwheelCTA onClick={(e) => {
                            handleSwapProject(e.currentTarget.dataset.projectid)
                        }} data-projectid={project.id} key={project.id} />
                    })}
                </CogwheelCTAContainer>
            </HandleProjectsContainer>
            <FullProjectTitle>
                01. <ProjectTitle>{project?.name}</ProjectTitle>
            </FullProjectTitle>
            <ProjectHeader>
                <ProjectImgLink
                    href={project?.liveDemo} target="blank"
                >
                    <ProjectImg src={project?.imagePath} />
                </ProjectImgLink>
                <ProjectInfos>
                    <ProjectTechnosContainer>
                        {/* need to map here */}
                        <ProjectTechno src="assets/technos/typescript.png" />
                        <ProjectTechno src="assets/technos/css.png" />
                    </ProjectTechnosContainer>
                    <ButtonContainer>
                        <Button
                            link={project?.github}
                        >
                            <GithubIcon $isProjectPage />
                            <TextOnBtn>Code</TextOnBtn>
                        </Button>
                        <Button
                            link={project?.liveDemo}
                        >
                            <GithubIcon $isProjectPage />
                            <TextOnBtn>Demo</TextOnBtn>
                        </Button>
                    </ButtonContainer>
                </ProjectInfos>
            </ProjectHeader >
            <ProjectDesc>
                {project?.text}
            </ProjectDesc>
        </>
    )
}

export default Projects