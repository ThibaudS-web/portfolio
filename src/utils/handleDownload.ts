export function handleDownload() {
    const fileName = "cv_thibaud_saumureau.pdf"
    const filePath = fileName
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}