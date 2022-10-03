
import React from "react"
import { useState } from "react"
import  {useAddPieceMutation} from "/home/zweeenr/code/projects/nickysArtDepot/client/src/features/api/apiSlice.js"

    const Home = () => {

        const [addPiece] = useAddPieceMutation()
        const [title,setTitle] = useState('')
        const [year,setYear] = useState(0)
        const [artist,setArtist] = useState(0)
        const [movement,setMovement] = useState(0)
        const [medium,setMedium] = useState(0)
        const [img,setImg] = useState(null)


        const formData = new FormData()
        formData.append('name', title)
        formData.append('year', year)
        formData.append('artist_id', artist)
        formData.append('movement_id', movement)
        formData.append('medium_id', medium)
        formData.append('img', img)

    return (
        <div>
            <h2>A page where I collect my favorite pieces</h2>
            <h3>When I find something new I submit it below</h3>
            <form
                 onSubmit={async(e)=> {
                    e.preventDefault()
                    addPiece(formData)
                 }}>
            
            <div>
            
                <input className="input" type="text" name="name" placeholder="name" onChange={(e)=>{setTitle(e.target.value)}}/>
                <input className="input" type="text" name="year" placeholder="year" onChange={(e)=>{setYear(e.target.value)}}/>
                <input className="input" type="text" name="artist" placeholder="artist_id" onChange={(e)=>{setArtist(e.target.value)}}/>
                <input className="input" type="text" name="movement" placeholder="movement_id" onChange={(e)=>{setMovement(e.target.value)}}/>
                <input className="input" type="text" name="medium" placeholder="medium_id" onChange={(e)=>{setMedium(e.target.value)}}/>
                <input className="input" type="file" accept="image/*" multiple={false} name="image" placeholder="upload image" onChange={(e)=>{setImg(e.target.files[0])}}/>

            </div>
                <button className="button" type="submit">Upload</button>
            </form>
        </div>
    )
}


export default Home
