import React from "react"
import { useLocation } from "react-router-dom";
const Pieces = () => {
    const location = useLocation()
    const data = location.state?.art
    console.log(data)
    return (
        <div>
            {data ? data : "u fucked up"}
        </div>
    )
}

export default Pieces