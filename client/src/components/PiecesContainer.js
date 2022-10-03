import React from "react"
import Pieces from "./Pieces";
import  {useGetPiecesQuery, useAddPieceMutation} from "/home/zweeenr/code/projects/nickysArtDepot/client/src/features/api/apiSlice.js"
const PiecesContainer = () => {
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
            content = pieces.data.map((e) => {
                return( <div>
                <Pieces art = {e}/>
                </div>
                )
            })
        } else if (isError) {
            content = <p>{error}</p>
        }
    return (
        <>
            {content}
        </>
    )
}
export default PiecesContainer