import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routesData from 'data/routesData';
const Router = () => (
    <Routes>
        {routesData.map(({path, component}) => (
            <Route path={path} exact element={component} key={path}/>
        ))}
</Routes>)

export default Router;