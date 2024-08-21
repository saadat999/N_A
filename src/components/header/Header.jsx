

import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
const Header = () => {




    return (
        <>
            <div className='container head'>
                <div className="top">

                    <h2>Nukura Aiym</h2>

                </div>
            </div>




            <div className="catalog container">
                <div id='fir' className='firstt'>

                    <Link to={'/catalog'}>catalog</Link>

                    <Link to={'/about_spot'}>About</Link>
                </div>

                <div className='secondd'>
                    <h3>Search</h3>
                    <h3>Cart</h3>
                </div>

            </div>

        </>
    )
}

export default Header