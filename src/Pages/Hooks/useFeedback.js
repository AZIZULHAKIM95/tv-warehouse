import { useEffect, useState } from "react"

const useFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL;
        fetch(`${url}/feedback`)
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return [feedbacks, setFeedbacks]
}

export default useFeedback