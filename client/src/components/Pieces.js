
import React from "react"

const Pieces = ({art}) => {
const [title, image] = [art.attributes.name, `http://localhost:8000${art.attributes.img.url}`]


console.log(image)
    return (
        <div className="art">
            <h2>{title}</h2>
            <img alt="boi" src={image}></img>
        </div>
    )
}


export default Pieces