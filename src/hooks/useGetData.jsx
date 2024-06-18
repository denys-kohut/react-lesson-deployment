import { useEffect, useState } from "react"

export function useGetData(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getData(successHandler, errorHandler) {
            try {
                const request = await fetch(url)
                const response = await request.json();
                successHandler(response);
            } catch (error) {
                errorHandler(true)
            }            
        }
        getData(setData, setError)
    }, [])

    return [data, error]
}
