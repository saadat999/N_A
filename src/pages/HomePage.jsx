

import React, { useState } from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Cart from '../components/Cart/Cart'

const HomePage = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Header setModal={setModal} />
            <Hero />
            <Footer />
            <div className='cart'>
                {modal && <Cart setModal={setModal}/>}
            </div>
        </>
    )
}

export default HomePage