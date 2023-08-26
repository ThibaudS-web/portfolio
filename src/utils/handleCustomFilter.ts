import { Project } from "../props"

export function handleCustomFilter(data: Array<Project> | null, selectedOption: string) {
    switch (selectedOption) {
        case "Trier les projets":
            return data
        case "Projets de formation":
            return data?.filter((project) => project.type === "formation")
        case "Projets personnels":
            return data?.filter((project) => project.type === "personnel")
        default:
            throw new Error("Unknown project type!")
    }
}

export default handleCustomFilter