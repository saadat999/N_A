


import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Catalog from '../components/catalog/Catalog'
import Cart from '../components/Cart/Cart'


const CatalogPage = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Header />

            <Catalog/>
            <Footer />
            <div className='cart'>
                {modal && <Cart setModal={setModal}/>}
            </div>
        </>
    )
}

export default CatalogPage