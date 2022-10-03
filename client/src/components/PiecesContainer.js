import React, { useEffect } from "react"
import Pieces from "./Pieces";
import  {useGetPiecesQuery} from "/home/zweeenr/code/projects/nickysArtDepot/client/src/features/api/apiSlice.js"
const PiecesContainer = ({setRefetch,refetch,art}) => {
    const {
        data: pieces, 
        isLoading,
        isSuccess, 
        isError,
        error
    } = useGetPiecesQuery()

    let content
    if (isLoading) {
        content = <p>loading</p>
    } else if (isSuccess) {
        content = pieces.data.map((element) => {
            return( <div>
            <Pieces art = {element}/>
            </div>
            )
        })
    } else if (isError) {
        content = <p>{error}</p>
    }
    console.log(art)
    console.log(content)
    return (
        // <div>
        //     {/* {
        //         content.data.map((element) => {
        //             return  <Pieces art = {element}/>
        //         })
        //     } */}
        // </div>
        <div>
            {content}
        </div>
    )
}
export default PiecesContainer