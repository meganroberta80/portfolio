import React from 'react'

function Nav() {
    return (
        <div className="header">
            <div className="logoBar">
                <a class="navBar" href="/">Home</a>
            </div>

            <div className="navBar">
                <a class="navBar" href="/about">About</a>
                <a class="navBar" href="/contact">Contact</a>
                <a class="navBar" href="/projects">Projects</a>
                <a class="navBar" href="/resume">Resumé</a>
            </div>
        </div>
    )
}

export default Nav