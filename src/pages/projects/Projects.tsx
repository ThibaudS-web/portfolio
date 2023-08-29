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
    const [activeCogwheelStates, setActiveCogwheelStates] = useState<Array<boolean>>([])


    useEffect(() => {
        const filteredDataByOption = handleCustomFilter(data, selectedOption) || []
        setDatafiltered(filteredDataByOption)

        if (filteredDataByOption.length > 0) {
            const initialActiveStates = new Array(filteredDataByOption.length).fill(false)
            initialActiveStates[0] = true
            setActiveCogwheelStates(initialActiveStates)
            setCurrentProject(filteredDataByOption[0])
            setCurrentProjectNumber(displayPositionNumber("0"))
        }
    }, [data, selectedOption])

    console.log(activeCogwheelStates)
    const handleSelectedOption = (selectedOption: string) => {
        setSelectedOption(selectedOption)
    }

    const findProjectById = (projectId: string) => {
        const filteredProjects = data?.filter((project) => project.id === projectId) || []
        return filteredProjects.length > 0 ? filteredProjects[0] : null
    }

    const handleSwapCurrentProject = (projectId: string | undefined, index: string | undefined) => {
        if (projectId && index) {
            setCurrentProject(findProjectById(projectId))
            setCurrentProjectNumber(displayPositionNumber(index))
        }
    }

    const displayPositionNumber = (index: string) => {
        return `0${parseInt(index) + 1}.`
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
                        return <CogwheelCTA
                            $isActive={activeCogwheelStates[index]}
                            onClick={() => {
                                const newActiveStates = activeCogwheelStates.map((_state, i) => i === index)
                                setActiveCogwheelStates(newActiveStates)
                                handleSwapCurrentProject(project.id, index.toString())
                            }}
                            key={project.id}
                        />
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