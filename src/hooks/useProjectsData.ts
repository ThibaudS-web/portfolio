import { useState, useEffect } from 'react'
import { Projects } from '../props';

const useProjectsData = () => {
    const [data, setData] = useState<null | Projects>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const urlPath = "data/projects.json"
        
        const fetchData = async () => {
            try {
                const response = await fetch(urlPath)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const projectsData = await response.json()
                setData(projectsData)
                setLoading(false)
            } catch (err) {
                setError(err as Error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
};

export default useProjectsData