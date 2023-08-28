import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
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
import handleCustomFilter from "../../utils/handleCustomFilter"

function Projects() {
    const { data, loading, error } = useProjectsData()
    const [dataFiltered, setDatafiltered] = useState<Array<Project>>([])
    const [currentProject, setCurrentProject] = useState<Project | null>(null)
    const [currentProjectNumber, setCurrentProjectNumber] = useState<string>("")
    const [selectedOption, setSelectedOption] = useState<string>("Trier les projets")

    useEffect(() => {
        const filteredDataByOption = handleCustomFilter(data, selectedOption) || []
        setDatafiltered(filteredDataByOption)
        console.log(filteredDataByOption)
        console.log('Mount, useEffect !')

        if (filteredDataByOption.length > 0) {
            setCurrentProject(filteredDataByOption[0])
            setCurrentProjectNumber("01.")
        }
    }, [data, selectedOption])

    const handleSelectedOption = (selectedOption: string) => {
        setSelectedOption(selectedOption)
    }

    const findProjectById = (projectId: string) => {
        const filteredProjects = data?.filter((project) => project.id === projectId) || []
        return filteredProjects.length > 0 ? filteredProjects[0] : null
    }

    const handleSwapCurrentProject = (projectId: string | undefined, position: string | undefined) => {
        if (projectId && position) {
            setCurrentProject(findProjectById(projectId))
            setCurrentProjectNumber(displayPositionNumber(position))
        }
    }

    const displayPositionNumber = (position: string) => {
        return `0${parseInt(position) + 1}.`
    }

    return (
        <>
            <AnimatedTitle
                textVariants={[
                    "MES PROJETS",
                    <span key="on-text">
                        sélectionnez un projet avec les <span style={{ color: "#467536" }}>roues</span>
                    </span>
                ]}
                avatarPaths={["assets/png/avatars/avatar_open_eyes.png",
                    "assets/png/avatars/avatar_wink.png"]}
            />
            <HandleProjectsContainer>
                <CustomSelect handleOption={handleSelectedOption} />
                <CogwheelCTAContainer>
                    {dataFiltered?.map((project, index) => {
                        return <CogwheelCTA onClick={(e) => {
                            handleSwapCurrentProject(e.currentTarget.dataset.projectid, e.currentTarget.dataset.index)
                        }} data-projectid={project.id} key={project.id} data-index={index} />
                    })}
                </CogwheelCTAContainer>
            </HandleProjectsContainer>
            <FullProjectTitle>
                {currentProjectNumber} <ProjectTitle>{currentProject?.name}</ProjectTitle>
            </FullProjectTitle>
            <ProjectHeader>
                <ProjectImgLink
                    href={currentProject?.liveDemo} target="blank"
                >
                    <ProjectImg src={currentProject?.imagePath} />
                </ProjectImgLink>
                <ProjectInfos>
                    <ProjectTechnosContainer>
                        {/* need to map here */}
                        <ProjectTechno src="assets/technos/typescript.png" />
                        <ProjectTechno src="assets/technos/css.png" />
                    </ProjectTechnosContainer>
                    <ButtonContainer>
                        <Button
                            link={currentProject?.github}
                        >
                            <GithubIcon $isProjectPage />
                            <TextOnBtn>Code</TextOnBtn>
                        </Button>
                        <Button
                            link={currentProject?.liveDemo}
                        >
                            <GithubIcon $isProjectPage />
                            <TextOnBtn>Demo</TextOnBtn>
                        </Button>
                    </ButtonContainer>
                </ProjectInfos>
            </ProjectHeader >
            <ProjectDesc>
                {currentProject?.text}
            </ProjectDesc>
        </>
    )
}

export default Projects