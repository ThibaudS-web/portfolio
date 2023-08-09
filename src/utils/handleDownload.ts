export function handleDownload() {
    const fileName = "cv_saumureau_thibaud.pdf"
    const filePath = "public\\downloads\\" + fileName
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}