
import React from "react"
import { useLocation } from "react-router-dom";
const Pieces = () => {

    const location = useLocation()
    const data = location.state
    console.log(data.data[0])

    return (
        <div>
            <h1>{data.data[0].attributes.name}</h1>
            <img alt= "boi" src ={data.data[0].attributes.img}></img>
        </div>
    )
}


export default Pieces