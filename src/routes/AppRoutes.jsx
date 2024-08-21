


import React from 'react'
import { Route, Routes } from "react-router-dom"
import CatalogPage from '../pages/CatalogPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import HistoryPage from '../pages/HistoryPage'
import Cart from '../pages/Cart'


const routes = [
    {
        path: '/',
        component: <HomePage/>
    },
    {
        path: '/catalog',
        component: <CatalogPage/>
    },
    {
        path: '/about_spot',
        component: <AboutPage/>
    },
    {
        path: '/historical',
        component: <HistoryPage/>
    },
    {
        path: '/',
        component: <Cart/>
    },

]
const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({path, component}) => {
                return <Route path={path} element={component} />
            })}
        </Routes>
    )
}

export default AppRoutes