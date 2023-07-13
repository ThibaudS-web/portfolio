import AnimatedTitle from "../../components/animated_title/AnimatedTitle"
import { BlocPage } from "./homeStyles"

function Home() {

    return (
        <>
            <BlocPage>
                <AnimatedTitle textVariants={["Bienvenue SUR MON PORTFOLIO !", "Moi c’est thibaud, enchanté !"]} />
            </BlocPage>
        </>
    )
}

export default Home