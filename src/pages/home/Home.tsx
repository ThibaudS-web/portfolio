import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import {
    BlocPage,
    ButtonContainer,
    FooterLink,
    SocialContainer,
    SocialLink,
    TextInfo
} from "./homeStyles"
import GithubIcon from "../../components/svg/github-icon/GithubIcon"
import LinkedinIcon from "../../components/svg/linkedin-icon/LinkedinIcon"
import Button from "../../components/button/Button"
import { TextOnBtn } from "../../components/button/buttonStyle"
import DownloadIcon from "../../components/svg/download-icon/DownloadIcon"
import { handleDownload } from "../../utils/handleDownload"

function Home() {
    return (
        <>
            <BlocPage>
                <AnimatedTitle
                    textVariants={[
                        <span key="on-text">
                            Moi c'est <span style={{ color: "#F3A712" }}>
                                Thibaud
                            </span>, enchanté !
                        </span>,
                        <span key="on-text">
                            <span style={{ color: "#F3A712" }}>
                                Bienvenue
                            </span> Sur mon portfolio !
                        </span>
                    ]}
                    avatarPaths={[
                        "assets/png/avatar_open_eyes.png",
                        "assets/png/avatar_wink.png"
                    ]}
                />
                <TextInfo>
                    Hello world! Je suis un développeur front-end web junior enthousiaste par la création d'expériences interactives. Mon objectif est d'allier design et fonctionnalités pour offrir des sites web modernes et captivants. Je suis ouvert aux opportunités de collaboration. Parcourez mon portfolio pour découvrir mes projets et n'hésitez pas à me contacter pour discuter de vos idées ou simplement pour en apprendre plus sur moi. Merci de votre visite !
                </TextInfo>
                <FooterLink>
                    <SocialContainer>
                        <SocialLink
                            target="blank"
                            href="https://www.linkedin.com/in/thibaud-s/"
                        >
                            <LinkedinIcon width="65px" />
                        </SocialLink>
                        <SocialLink
                            target="blank"
                            href="https://github.com/ThibaudS-web"
                        >
                            <GithubIcon width="75px" />
                        </SocialLink>
                    </SocialContainer>
                    <ButtonContainer>
                        <Button homeBtn link="mailto:thibaud.prodev@gmail.com">
                            CONTACTEZ MOI !
                        </Button>
                        <Button homeBtn onClick={handleDownload}>
                            <TextOnBtn>CV</TextOnBtn>
                            <DownloadIcon />
                        </Button>
                    </ButtonContainer>
                </FooterLink>
            </BlocPage>
        </>
    )
}

export default Home