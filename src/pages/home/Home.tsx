import AnimatedTitle from "../../components/animated-title/AnimatedTitle"
import {
    FooterLink,
    SocialContainer,
    TextInfo
} from "./homeStyles"
import { handleDownload } from "../../utils/handleDownload"
import ButtonAnimated from "../../components/animated-button/ButtonAnimated"

function Home() {
    return (
        <>
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
                    "assets/webp/avatars/avatar_open_eyes.webp",
                    "assets/webp/avatars/avatar_wink.webp"
                ]}
            />
            <TextInfo>
                Hello world! Je suis un développeur web front-end enthousiaste par la création d'expériences interactives. Mon objectif est d'allier design et fonctionnalités pour offrir des sites web modernes et captivants. Je suis ouvert aux opportunités de collaboration. Parcourez mon portfolio pour découvrir mes projets et n'hésitez pas à me contacter pour discuter de vos idées ou simplement pour en apprendre plus sur moi. Merci de votre visite !
            </TextInfo>
            <FooterLink>
                <SocialContainer>
                    <ButtonAnimated
                        dataAttrText="LINKEDIN"
                        iconLabel="linkedin"
                        urlPath="https://www.linkedin.com/in/thibaud-s/"
                    />
                    <ButtonAnimated                       
                        dataAttrText="GITHUB"
                        iconLabel="github"
                        urlPath="https://github.com/ThibaudS-web"
                    />
                    <ButtonAnimated
                        dataAttrText="EMAIL"
                        iconLabel="envelope"
                        urlPath="mailto:thibaud.prodev@gmail.com"
                    />
                </SocialContainer>
                <ButtonAnimated
                    dataAttrText="UPLOAD"
                    text="CV"
                    onClick={handleDownload}
                    bgColor="#A22C29"
                    textColor="#A22C29"
                />
            </FooterLink>
        </>
    )
}

export default Home