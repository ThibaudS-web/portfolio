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
    const [dataFiltered, setDatafiltered] = useState<Array<Project> | null>(null)
    const [currentProject, setCurrentProject] = useState<Project | null>(null)
    const [selectedOption, setSelectedOption] = useState<string>("Trier les projets")
    
    useEffect(() => {
        if (data) {
            setCurrentProject(data[0])
        }
    }, [data])

    useEffect(() => {
        const filteredDataByOption = handleCustomFilter(data, selectedOption) || [];
        setDatafiltered(filteredDataByOption);
        filteredDataByOption && setCurrentProject(filteredDataByOption[0])
    }, [data, selectedOption]);

    const handleSelectedOption = (selectedOption: string) => {
        setSelectedOption(selectedOption)
    }

    const findProjectById = (projectId: string) => {
        const filteredProjects = data?.filter((project) => project.id === projectId) || []
        return filteredProjects.length > 0 ? filteredProjects[0] : null
    }


    const handleSwapProject = (projectId: string | undefined) => {
        if (projectId) {
            setCurrentProject(findProjectById(projectId))
        }
    }

    //TODO: Connect customSelect with cogwheelCTA
    //TODO: Handle title project number and add an icon for demo button
    //TODO: Add animations for project view

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
                    {dataFiltered?.map((project) => {
                        return <CogwheelCTA onClick={(e) => {
                            handleSwapProject(e.currentTarget.dataset.projectid)
                        }} data-projectid={project.id} key={project.id} />
                    })}
                </CogwheelCTAContainer>
            </HandleProjectsContainer>
            <FullProjectTitle>
                01. <ProjectTitle>{currentProject?.name}</ProjectTitle>
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