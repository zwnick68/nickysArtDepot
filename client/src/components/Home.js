
import React from "react"
import { useState } from "react"

    const Home = () => {

        const [submitModalVisible, setSubmitModalVisible] = useState(false)
        const toggleSubmit = () => {setSubmitModalVisible(!submitModalVisible)}

        const [form,setForm] = useState({
            name: '', 
            img: '', 
            year: 0,
            artist_id: 0, 
            movement_id: 0, 
            medium_id: 0

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
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(form)
                    })
                 }}>
            
            <div>
            
                <input className="input" type="text" name="name" placeholder="name" onChange={(e)=>{setForm({...form, name: e.target.value})}}/>
                <input className="input" type="text" name="medium" placeholder="image" onChange={(e)=>{setForm({...form, img: e.target.value})}}/>
                <input className="input" type="text" name="image" placeholder="year" onChange={(e)=>{setForm({...form, year: e.target.value})}}/>
                <input className="input" type="text" name="artist" placeholder="artist_id" onChange={(e)=>{setForm({...form, artist_id: e.target.value})}}/>
                <input className="input" type="text" name="movement" placeholder="movement_id" onChange={(e)=>{setForm({...form, movement_id: e.target.value})}}/>
                <input className="input" type="text" name="year" placeholder="medium_id" onChange={(e)=>{setForm({...form, medium_id: e.target.value})}}/>

            </div>
                <button className="button" type="submit">Upload</button>
            </form>
        </div>
    )
}


export default Home