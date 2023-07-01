import Header from "./header/Header"

function Layout(props: { children: React.ReactNode }) {

    return (
        <>
            <Header />
            <main>{props.children}</main>
        </>
    )

}

export default Layout