import AnimatedTitle from "../../components/animated-title/AnimatedTitle"
import CustomSelect from "../../components/select-custom/CustomSelect"
import {
    FullProjectTitle,
    ProjectHeader,
    ProjectTitle,
    ProjectImg,
    ProjectDesc,
    ProjectTechnosContainer,
    ProjectInfos,
    ButtonContainer,
    ProjectImgLink,
    HandleProjectsContainer,
    CogwheelCTAContainer,
    ProjectNumber
} from "./projectsStyle"
import Button from "../../components/button/Button"
import GithubIcon from "../../components/svg/github-icon/GithubIcon"
import { TextOnBtn } from "../../components/button/buttonStyle"
import useProjectsData from "../../hooks/services/useProjectsData"
import CogwheelCTA from "../../components/svg/cogwheel-cta/CogwheelCTA"
import { useEffect, useState } from "react"
import { Project } from "../../props"
import handleCustomFilter from "../../utils/handleCustomFilter"
import useProjectAnimation from "../../hooks/project-animation/useProjectTitleAnimation"
import useProjectTechnosAnimation from "../../hooks/project-animation/useProjectTechnosAnimation"
import useProjectGlobalAnimation from "../../hooks/project-animation/useProjectGlobalAnimation"

function Projects() {
    const { data } = useProjectsData()
    const [dataFiltered, setDatafiltered] = useState<Array<Project>>([])
    const [currentProject, setCurrentProject] = useState<Project | null>(null)
    const [currentProjectNumber, setCurrentProjectNumber] = useState<string>("")
    const [selectedOption, setSelectedOption] = useState<string>("Trier les projets")
    const [activeCogwheelStates, setActiveCogwheelStates] = useState<Array<boolean>>([])

    const { title, displayTitleAnimation } = useProjectAnimation(currentProject)
    const { technos, displayTechnosAnimation } = useProjectTechnosAnimation(currentProject)
    const { textVariant, imageVariants } = useProjectGlobalAnimation()
    
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

    useEffect(() => {
        displayTitleAnimation()
        displayTechnosAnimation()
    }, [currentProject])

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
                        sélectionnez un projet avec les <span style={{ color: "#A22C29" }}>roues</span>
                    </span>
                ]}
                avatarPaths={["assets/webp/avatars/avatar_open_eyes.webp",
                    "assets/webp/avatars/avatar_wink.webp"]}
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
                <ProjectNumber>{currentProjectNumber}</ProjectNumber>
                <ProjectTitle
                    key={currentProject?.name}
                >
                    {title}
                </ProjectTitle>
            </FullProjectTitle>
            <ProjectHeader>
                <ProjectImgLink
                    href={currentProject?.liveDemo} target="blank"
                >
                    <ProjectImg
                        loading="lazy"
                        alt={currentProject?.name}
                        src={currentProject?.imagePath}
                        key={currentProject?.imagePath}
                        variants={imageVariants}
                        animate="visible"
                        initial="hidden"
                    />
                </ProjectImgLink>
                <ProjectInfos>
                    <ProjectTechnosContainer>
                        {technos}
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
            <ProjectDesc
                key={currentProject?.text}
                animate="visible"
                initial="hidden"
                variants={textVariant}
            >
                {currentProject?.text}
            </ProjectDesc >
        </>
    )
}

export default Projects