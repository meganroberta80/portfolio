import React from 'react'
import { Route, Switch, Link } from "react-router-dom"

function Nav() {
    return (
        <div className="header">
            <div className="logoBar">
                <Link to="/" class="navBar">Home</Link>
            </div>

            <div className="navBar">

                <Link to="/contact" class="navBar">Contact</Link>

                <Link to="/projects" class="navBar">Projects</Link>

                <Link to="/resume" class="navBar">Resumé</Link>
            </div>
        </div> 
    )
}

export default Nav