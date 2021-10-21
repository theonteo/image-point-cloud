/*****************************************************************************/
/*!
\file Home.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import '../../App.css';

import Landing from '../Landing/Landing'
import LoadingManager from "../../Render/LoadingManager";

function Home()
{
    return (
        <>
            <LoadingManager/>
            <Landing/>
        </>
    );
}

export default Home;