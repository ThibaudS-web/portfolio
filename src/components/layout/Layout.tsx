import Header from "../header/Header"
import { BlocPage } from "./LayoutStyles"

function Layout(props: { children: React.ReactNode }) {

    return (
        <>
            <Header/>
            <BlocPage>
                {props.children}
            </BlocPage>

        </>
    )

}

export default Layout