

import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
const Header = (props) => {
    const {setModal} = props
    const openCart = () => {
        setModal(true)
    }

    return (
        <>
            <div className='container head'>
                <div className="top">

                    <h2>Nukura Aiym</h2>

                </div>
            </div>




            <div className="catalog container">
                <div id='fir' className='firstt'>

                    <Link to={'/catalog'}>Каталог</Link>

                    <Link to={'/about_spot'}>Бренд жөнүндө</Link>
                </div>

                <div className='secondd'>
                    <h3>Search</h3>
                    <button onClick={() => {
                        openCart()

                    }}>Cart</button>
                </div>

            </div>

        </>
    )
}

export default Header