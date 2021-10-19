import React from 'react'
import { useEffect } from 'react';

function Projects(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='projects'>
            <h1>Software Engineering Projects</h1>

            <h2 className='proj-header'>Design by Louis, September 2021</h2>

            <h2 className='proj-header' >Nails R Us, August 2021</h2>
            
            <h2 className='proj-header' >Tamagotchi App, July 2021</h2>
        </div>
    )
}

export default Projects