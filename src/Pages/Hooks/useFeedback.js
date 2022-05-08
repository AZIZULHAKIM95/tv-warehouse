import { useEffect, useState } from "react"

const useFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        const url = "http://192.168.0.106:5000"
        fetch(`${url}/feedback`)
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return [feedbacks, setFeedbacks]
}

export default useFeedback