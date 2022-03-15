import React from 'react';
import './index.css'
import NavigationMenu from "../../components/Menu";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../components/Home";
import Technology from "../../components/Technology";
import Settings from "../../components/Settings";
import Share from "../../components/Share";
import Notice from "../../components/Notice";
import Knowledge from "../../components/Knowledge";
import Language from "../../components/Language";
import Rank from "../../components/Rank";
function HomePage(props) {
    return (
        <div id="container">
            <NavigationMenu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/technology' element={<Technology/>}/>
                <Route path='/setting/*' element={<Settings/>}/>
                <Route path='/share' element={<Share/>}/>
                <Route path='/notice/*' element={<Notice/>}/>
                <Route path='/knowledge' element={<Knowledge/>}/>
                <Route path='/language' element={<Language/>}/>
                <Route path='/rank' element={<Rank/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    );
}

export default HomePage;
