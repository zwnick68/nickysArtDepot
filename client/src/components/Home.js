
import React from "react"
import { useState } from "react"
    const Home = ({refetch,setRefetch,art,setArt}) => {

        const [submitModalVisible, setSubmitModalVisible] = useState(false)
        const toggleSubmit = () => {setSubmitModalVisible(!submitModalVisible)}

        const [form,setForm] = useState({
            name: '',  
            year: 0,
            artist_id: 0, 
            movement_id: 0, 
            medium_id: 0,
            img: null

    })
    return (
        <div>
            <h2>A page where I collect my favorite pieces</h2>
            <h3>When I find something new I submit it below</h3>
            <form
                 onSubmit={async(e)=> {
                    e.preventDefault()
                    let req = await fetch('http://localhost:8000/pieces', {
                        method: 'POST',
                        
                        body: form
                    })
                    let res = await req.json()
                    // setArt((prevState) => {
                    //     console.log(prevState.data)
                    //     let newArt = prevState.data
                    //    return [...newArt, res.data]
                    //     })
                    setRefetch(!refetch)
                 }}>
            
            <div>
            
                <input className="input" type="text" name="name" placeholder="name" onChange={(e)=>{setForm({...form, name: e.target.value})}}/>
                <input className="input" type="text" name="year" placeholder="year" onChange={(e)=>{setForm({...form, year: e.target.value})}}/>
                {/* <input className="input" type="text" name="image" placeholder="year" onChange={(e)=>{setForm({...form, year: e.target.value})}}/> */}
                <input className="input" type="text" name="artist" placeholder="artist_id" onChange={(e)=>{setForm({...form, artist_id: e.target.value})}}/>
                <input className="input" type="text" name="movement" placeholder="movement_id" onChange={(e)=>{setForm({...form, movement_id: e.target.value})}}/>
                <input className="input" type="text" name="medium" placeholder="medium_id" onChange={(e)=>{setForm({...form, medium_id: e.target.value})}}/>
                <input className="input" type="file" accept="image/*" multiple={false} name="image" placeholder="upload image" onChange={(e)=>{setForm({...form, img: e.target.files[0]})}}/>

            </div>
                <button className="button" type="submit">Upload</button>
            </form>
        </div>
    )
}


export default Home
