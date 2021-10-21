/*****************************************************************************/
/*!
\file Landing.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react'
import Scene1 from '../Scenes/Scene1'
import Intro from '../Intro/Intro'
import './Landing.css'

function Landing()
{
    return (
        <div className='landingContainer'>
            <div className='contentContainer'>
                <div className="RenderWindow2">
                    <Scene1 />
                    <div className="SideBarIntro">
                        <Intro />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
