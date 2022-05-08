import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([])
    let url = "http://192.168.0.106:5000";
    useEffect(() => {
        fetch(url+"/products")
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
}

export default useInventory