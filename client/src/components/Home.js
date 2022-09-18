
import React from "react"
import { useState } from "react"

    const Home = () => {

        const [submitModalVisible, setSubmitModalVisible] = useState(false)
        const toggleSubmit = () => {setSubmitModalVisible(!submitModalVisible)}

        const [form,setForm] = useState({
            name: '', 
            medium: '', 
            img: '', 
            year: 0
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
                <input className="input" type="text" name="name" placeholder="Name" onChange={(e)=>{setForm({...form, name: e.target.value})}}/>
                <input className="input" type="text" name="medium" placeholder="medium" onChange={(e)=>{setForm({...form, medium: e.target.value})}}/>
                <input className="input" type="text" name="image" placeholder="year" onChange={(e)=>{setForm({...form, year: e.target.value})}}/>
                <input className="input" type="text" name="artist" placeholder="artist" onChange={(e)=>{setForm({...form, artist: e.target.value})}}/>
                <input className="input" type="text" name="movement" placeholder="movement" onChange={(e)=>{setForm({...form, movement: e.target.value})}}/>
                <input className="input" type="text" name="year" placeholder="image" onChange={(e)=>{setForm({...form, image: e.target.value})}}/>
            </div>
                <button className="button" type="submit">Upload</button>
            </form>
        </div>
    )
}


export default Home