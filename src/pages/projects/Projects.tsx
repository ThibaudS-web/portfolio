import AnimatedTitle from "../../components/animated-title/AnimatedTitle"
import CustomSelect from "../../components/select-custom/CustomSelect"
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
    CogwheelCTAContainer,
    ProjectNumber
} from "./projectsStyle"
import Button from "../../components/button/Button"
import GithubIcon from "../../components/svg/github-icon/GithubIcon"
import { TextOnBtn } from "../../components/button/buttonStyle"
import useProjectsData from "../../hooks/useProjectsData"
import CogwheelCTA from "../../components/svg/cogwheel-cta/CogwheelCTA"
import { useEffect, useState } from "react"
import { Project } from "../../props"
import handleCustomFilter from "../../utils/handleCustomFilter"
import { delay, motion } from "framer-motion"

function Projects() {
    const { data } = useProjectsData()
    const [dataFiltered, setDatafiltered] = useState<Array<Project>>([])
    const [currentProject, setCurrentProject] = useState<Project | null>(null)
    const [currentProjectNumber, setCurrentProjectNumber] = useState<string>("")
    const [selectedOption, setSelectedOption] = useState<string>("Trier les projets")
    const [activeCogwheelStates, setActiveCogwheelStates] = useState<Array<boolean>>([])
    //Animation Current project
    const [refreshKey, setRefreshKey] = useState(0)
    const [text, setText] = useState<Array<JSX.Element>>([])

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
        setRefreshKey(prevKey => prevKey + 1)

        if (currentProject) {
            let textAnimate = currentProject?.name.split("").map((char, index) => {
                return <motion.span
                    animate="visible"
                    initial="hidden"
                    custom={index}
                    key={index}
                    variants={letterVariants}
                >
                    {char.trim().length === 0 ? <span>&nbsp;</span> : char}
                </motion.span>
            })

            setText(textAnimate)
        }

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

    const technosVariants = {
        visible: (i: number) => ({
            opacity: 1,
            scale: [0, 1.2, 1],
            transition: {
                type: "spring",
                stiffness: 200,
                delay: i * 0.2,
            }
        }),
        hidden: { opacity: 0, scale: 0 }
    }

    const letterVariants = {
        visible: (i: number) => ({
            opacity: 1,
            letterSpacing: "0.1rem",
            color: ["#A22C29", "#F3A712", "#A22C29", "#F3A712"],
            transition: {
                delay: i * 0.050
            }
        }),
        hidden: { opacity: 0, letterSpacing: "-1.5rem" }
    }

    const textVariant = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.7,
                stiffness: 80
            }
        },
        hidden: { opacity: 0 }
    }

    const imageVariants = {
        visible: {
            opacity: 1,
            objectPosition: "50% 0%"
        },
        hidden: { opacity: 0, objectPosition: "50% 100%" }
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
                    {text}
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
                        {currentProject?.technos.map((techUrl, index) => {
                            const technoName = techUrl.split("/").pop()?.replace(".png", "")
                            return <ProjectTechno
                                custom={index}
                                variants={technosVariants}
                                animate="visible"
                                initial="hidden"
                                src={techUrl}
                                key={`${technoName}-${refreshKey}`}
                                alt={technoName}
                            />
                        })}
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