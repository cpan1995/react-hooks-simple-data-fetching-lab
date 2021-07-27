// create your App component here
import { useEffect, useState } from "react"
import React from 'react'

export default function App(){

    const [img, setImg] = useState('')
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data =>  setImg(data.message))
    }, [])

    if (!img){
        return (<p> Loading... </p>)
    }

    return (
        <div>
            <img src ={img} alt= "A Random Dog" ></img>
        </div>
    )
}