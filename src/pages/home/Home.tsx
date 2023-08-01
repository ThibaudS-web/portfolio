import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import {
    BlocPage,
    Button,
    ButtonContainer,
    FooterLink,
    Link,
    SocialContainer,
    SocialLink,
    TextInfo
} from "./homeStyles"
import GithubIcon from "../../components/svg/GithubIcon"
import LinkedinIcon from "../../components/svg/LinkedinIcon"
import DownloadButton from "../../components/DownloadButton"

function Home() {
    return (
        <>
            <BlocPage>
                <AnimatedTitle
                    textVariants={[
                        "BIENVENUE SUR MON PORTFOLIO !",
                        <span key="on-text">
                            MOI C'EST <span style={{ color: "#F3A712" }}>THIBAUD</span> ENCHANTÉ !
                        </span>
                    ]}
                    avatarPaths={["public/assets/png/avatar_open_eyes.png",
                        "public/assets/png/avatar_wink.png"]}
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
                        <DownloadButton />
                    </ButtonContainer>
                </FooterLink>
            </BlocPage>
        </>
    )
}

export default Home