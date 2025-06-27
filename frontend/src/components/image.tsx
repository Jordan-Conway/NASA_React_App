import React from "react"

function image(props?: imageProps){
    if(props?.url === "")
    {
        console.log("Url is undefined")
        return
    }
    let result = 
        <>
            <img src={props?.url} alt={props?.title} id="potd"></img>
            <p id="potdCopyright">{props?.copyright}</p> 
        </>
    
    return(
        result
    )
}

type imageProps = {
    url: string | undefined,
    copyright: string | undefined,
    title: string | undefined
}

export {
    image
}

export type{
    imageProps
}