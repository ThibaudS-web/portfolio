import { AnimatedTitleContainer, CogwheelsContainer, GreyCogwheel, RedCogwheel, TitleContainer, YellowCogwheel } from "./animatedTitleStyle"

function AnimatedTitle() {

    return <>
        <AnimatedTitleContainer>
            <CogwheelsContainer>
                <GreyCogwheel src="\assets\png\cogwheelb_grey.png" />
                <RedCogwheel src="\assets\png\cogwheelb_red.png" />
                <YellowCogwheel src="\assets\png\cogwheelb_yellow.png" />
            </CogwheelsContainer>
            <TitleContainer>
                
            </TitleContainer>
            <CogwheelsContainer $rotate>
                <GreyCogwheel src="\assets\png\cogwheelb_grey.png" />
                <RedCogwheel src="\assets\png\cogwheelb_red.png" />
                <YellowCogwheel src="\assets\png\cogwheelb_yellow.png" />
            </CogwheelsContainer>
        </AnimatedTitleContainer>
    </>
}

export default AnimatedTitle