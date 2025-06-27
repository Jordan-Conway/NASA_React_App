import React from "react"

let image: HTMLImageElement | null = null
let date: Date = new Date()

function PictureOfTheDay(props: POTDProps){
    if(props.date == null)
    {
        props.date = Date.now()
    }
    let dateValue = new Date(props.date)

    return (
        <div id="potd">
            <p>Picture for {dateValue.toISOString()} goes here</p>
            <button onClick={() => getPicture(new Date(props.date))}>Test getPicture</button>
        </div>
    )
    
}

async function getPicture(dateToGet: Date){
    if(date == dateToGet)
    {
        return image
    }

    let url = `http://localhost:8080/potd/${dateToGet.toISOString().split('T')[0]}`
    console.log(`URL is ${url}`)
    fetch(url).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
    })

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