

import React from 'react'
import './Hero.css'


const Hero = () => {
    return (
        <div className='container'>
            <div className='hero'>
                <img width={300} height={350} src={'/kol.png'} alt="" />
                <img width={300} height={350} src={'/ezhe.jpg'} alt="" />
                <img width={300} height={350} src={'/first.jpg'} alt="" />

            </div>
        </div>
    )
}

export default Hero