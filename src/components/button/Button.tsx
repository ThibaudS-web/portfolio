import { Btn, Link } from "./buttonStyle"
import { ButtonProps } from "../../props"

function Button(props: ButtonProps) {
    const { link, children, onClick, homeBtn } = props

    const handleClick = () => {
        if (onClick) onClick()
    }

    return (
        <Btn $homeBtn={!!homeBtn} onClick={handleClick}>
            {
                link ?
                    <Link
                        target="_blank"
                        href={link ? link : undefined} >
                        {children}
                    </Link>
                    :
                    <>
                        {children}
                    </>
            }
        </Btn>
    )
}

export default Button