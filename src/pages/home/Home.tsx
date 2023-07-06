import { AnimatedTitleContainer, BlocPage, CogwheelsContainer, GreyCogwheel, RedCogwheel, YellowCogwheel } from "./homeStyles"

function Home() {
    return (
        <>
            <BlocPage>
                <AnimatedTitleContainer>
                    <CogwheelsContainer>
                        <GreyCogwheel src="\assets\png\cogwheelb_grey.png" />
                        <RedCogwheel src="\assets\png\cogwheelb_red.png" />
                        <YellowCogwheel src="\assets\png\cogwheelb_yellow.png" />
                    </CogwheelsContainer>
                    <CogwheelsContainer $rotate>
                        <GreyCogwheel src="\assets\png\cogwheelb_grey.png" />
                        <RedCogwheel src="\assets\png\cogwheelb_red.png" />
                        <YellowCogwheel src="\assets\png\cogwheelb_yellow.png" />
                    </CogwheelsContainer>
                </AnimatedTitleContainer>
            </BlocPage>
        </>
    )
}

export default Home