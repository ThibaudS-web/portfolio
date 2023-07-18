import { Button, TextOnBtn } from "../pages/home/homeStyles";
import DownloadIcon from "./svg/DownloadIcon";

function DownloadButton() {

    const handleDownload = () => {
        const fileName = "cv_saumureau_thibaud.pdf"
        const filePath = "public\\downloads\\" + fileName
        const link = document.createElement("a")
        link.href = filePath
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Button onClick={handleDownload}>
            <TextOnBtn>CV</TextOnBtn>
            <DownloadIcon width="25px" height="25px" />
        </Button>
    )
}

export default DownloadButton