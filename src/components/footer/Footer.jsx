

import React from 'react'

import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div id='foot' className='container'>
                <div className='first'>
                    <h3 className='logo-n'>Nukura Aiym</h3>
                    <div className='content'>
                        <h5>Биз менен бирге табигый жаркырап турган сулуулукка саякат жасаңыз.</h5>
                        <h5>
                            Айжамалдан сырдуу кеңештерди жана өзгөчө жаңылыктарды түз почтаңызга алыңыз!</h5>
                        <input placeholder='Email Address' type="email" name="" id="" />
                        <p>
                            Катталуу менен сиз биздин Купуялык Саясатыбызга макулдугуңузду билдиресиз.</p>


                        <h4>Жеке маалыматымды сатпаңыз же бөлүшпөңүз</h4>

                    </div>
                </div>
                <div className='second'>
                    <div className="navigation">
                        <h3>Навигация</h3>
                        <Link to={'/historical'}>биздин тарыx</Link>
                        <Link >төлөм</Link>
                        <a href="">жеткирүү</a>
                    </div>
                    <div className="social">
                        <h3>Социалдык баракчалар</h3>
                        <a  href="" >Tик Ток</a>
                        <a  href="https://www.instagram.com/nukura_ayim_cosmetics" target="_blank">Инстаграм</a>
                    </div>
                    <div className="contacts">
                        <h3>Байланыш</h3>
                        <p>923847930487</p>
                        <a  href="https://wa.me/996500285685?text=Привет!">впга жазуу</a>
                        <a  href="https://t.me/AselSovetbekovna" target="_blank">тгга жазуу</a>


                        <p> © 2024,  Nukura Aiym Cosmetics</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer