import React from 'react'
import './Cart.css'

const Cart = (props) => {
    const { setModal } = props
    const closeCart = () => {
        setModal(false)
    }
    return (
        <div className='container'> 
            <div className='cart container'>

                <button onClick={() => {
                    closeCart()
                }}>Close</button>
                <h1>Arsen</h1>
            </div>
        </div>
    )
}

export default Cart