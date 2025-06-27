import React, { useState } from "react"
import { NavBar, type NavBarProps } from "./NavBar"
import { PictureOfTheDay, type POTDProps } from "./PictureOfTheDay"

export default function MainPage(){
    let navBarItems = ["Picture of the Day", "Data"]
    const [active, setActive] = useState(navBarItems[0])

    let navBarProps: NavBarProps = {
        navBarItems: navBarItems,
        active: active,
        updateSelected: setActive
    }

    let potdProps: POTDProps = {
        date: Date.now()
    }

    return(
        <>
            <NavBar {...navBarProps} />
            <PictureOfTheDay {...potdProps} />
        </>
    )
}