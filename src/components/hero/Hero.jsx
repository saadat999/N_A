

import React from 'react'
import './Hero.css'
import im1 from '../../assets/kol.png'
import im2 from '../../assets/ezhe.jpg'
import im3 from '../../assets/first.jpg'

const Hero = () => {
    return (
        <div className='container'>
            <div className='hero'>
                <img width={300} height={350} src={im1} alt="" />
                <img width={300} height={350} src={im2} alt="" />
                <img width={300} height={350} src={im3} alt="" />
            </div>
        </div>
    )
}

export default Hero