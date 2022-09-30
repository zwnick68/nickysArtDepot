
import React from "react"

const Pieces = ({art}) => {

    return (
        <div class="art">
            <h1>{art.attributes.name}</h1>
            <img class="art"  alt="boi" src= {art.attributes.img}></img>
        </div>
    )
}


export default Pieces