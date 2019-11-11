import React from 'react'
import './Drawer.css'

function Drawer( {isVisible}) {

    const links = [
        1,2
    ];

    function renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a> Link {link} </a>
                </li>
            )
        })
    }

    return (
        <div className={isVisible ? "DrawerClose" : "Drawer" }>
            <div >
                 <ul>
                    { isVisible ?  null : renderLinks()}
                </ul>
            </div>
        </div>
    )
}

export default Drawer
