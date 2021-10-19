import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
function Header() {
    return (
        <header className='site-header'>
            
            <div className='name'>
                <Link className='header-link' 
                 to='/'>
                    <h1>Megan Waltman</h1></Link>
            </div>

            <div className='domain-name'>
                <h1>meganroberta.com</h1>
            </div>

        </header>
    )
}

export default Header