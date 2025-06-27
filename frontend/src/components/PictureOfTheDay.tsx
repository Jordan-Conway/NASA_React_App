import React, { useState } from "react"
import { image as ImageDisplay, type imageProps } from "./image"

function PictureOfTheDay(props: POTDProps){
    const [image, setImage] = useState<imageProps>({
        url: "",
        title: "",
        copyright: ""
    })
    const [date, setDate] = useState(new Date())

    if(props.date == null)
    {
        props.date = Date.now()
    }

    return (
        <div id="potd">
            <input type="date" id="dateSelection" onChange={() => handleDateSelection(setDate)}></input>
            <button onClick={() => getPicture(date, setImage)}>Test getPicture</button>
            <ImageDisplay {...image}></ImageDisplay>
        </div>
    )
    
}

async function getPicture(dateToGet: Date, setImage: React.Dispatch<React.SetStateAction<imageProps>>){
    let url = `http://localhost:8080/potd/${dateToGet.toISOString().split('T')[0]}`
    console.log(`URL is ${url}`)
    fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        let newImage: imageProps = {
            url: data.url,
            title: data.title,
            copyright: data.copyright
        }
        setImage(newImage)
    })

}

function handleDateSelection(setDate: React.Dispatch<React.SetStateAction<Date>>)
{
    let newDate: Date = new Date((document.getElementById("dateSelection") as HTMLInputElement)!.value)
    console.log(newDate)
    setDate(newDate)
}

type POTDProps = {
    date: number
}

export {
    PictureOfTheDay,
}

export type {
    POTDProps
}