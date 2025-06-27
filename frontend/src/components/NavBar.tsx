import React from 'react'

function NavBar(props: NavBarProps)
{
    return (
        <div id="navBar">
            {props.navBarItems.map((item) => (
                <div key={item}
                id={item}
                date-active = {(item === props.active).toString()}
                onClick={() => props.updateSelected(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

type NavBarProps = {
    navBarItems: string[]
    active: string,
    updateSelected: Function
}

export {
    NavBar
}

export type {
    NavBarProps
}