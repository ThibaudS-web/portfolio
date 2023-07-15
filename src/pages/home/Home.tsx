import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import {
    BlocPage,
    Button,
    ButtonContainer,
    FooterLink,
    Link,
    SocialContainer,
    SocialLink,
    TextInfo,
    TextOnBtn
} from "./homeStyles"
import DownloadIcon from "../../components/svg/DownloadIcon"
import GithubIcon from "../../components/svg/GithubIcon"
import LinkedinIcon from "../../components/svg/LinkedinIcon"

function Home() {

    return (
        <>
            <BlocPage>
                <AnimatedTitle
                    textVariants={["Bienvenue SUR MON PORTFOLIO !", "Moi c’est thibaud, enchanté !"]}
                    avatarPaths={["\\assets\\png\\avatar_open_eyes.png",
                        "\\assets\\png\\avatar_wink.png"]}
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
                        <Button>
                            <Link href="mailto:thibaud.prodev@gmail.com">
                                CONTACTEZ MOI !
                            </Link>
                        </Button>
                        <Button>
                            <TextOnBtn>CV</TextOnBtn>
                            <DownloadIcon
                                width="25px"
                                height="25px"
                            />
                        </Button>
                    </ButtonContainer>
                </FooterLink>
            </BlocPage>
        </>
    )
}

export default Home