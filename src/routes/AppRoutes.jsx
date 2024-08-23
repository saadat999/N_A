


import React from 'react'
import { Route, Routes } from "react-router-dom"

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import HistoryPage from '../pages/HistoryPage'
import CatalogPage from '../pages/CatalogPage'


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