import { useState, useEffect } from 'react'

const useProjectsData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/projects.json")
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
        };

        fetchData()
    }, [])

    return { data, loading, error }
};

export default useProjectsData