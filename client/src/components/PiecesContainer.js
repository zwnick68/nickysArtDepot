import React from "react"
import { useLocation } from "react-router-dom";
import Pieces from "./Pieces";
const PiecesContainer = ({art}) => {

    // const location = useLocation()
    // const data = location.state
    // console.log(data.data[0])
    console.log(art)
    return (
        <div>
            {
                art.data.map((element) => {
                    return  <Pieces art = {element}/>
                })
            }
        </div>
    )
}


export default PiecesContainer