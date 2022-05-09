import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([])
    let url = process.env.REACT_APP_API_URL;
    useEffect(() => {
        fetch(url+"products")
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
}

export default useInventory