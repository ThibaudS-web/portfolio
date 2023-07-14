import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import { BlocPage } from "./homeStyles"

function Home() {

    return (
        <>
            <BlocPage>
                <AnimatedTitle
                    textVariants={["Bienvenue SUR MON PORTFOLIO !", "Moi c’est thibaud, enchanté !"]}
                    avatarPaths={[" \\assets\\png\\avatar_open_eyes.png", " \\assets\\png\\avatar_wink.png"]} />
            </BlocPage>
        </>
    )
}

export default Home