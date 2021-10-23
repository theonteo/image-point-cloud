/*****************************************************************************/
/*!
\file Intro.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains point-cloud application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react'
import './Intro.css'
import { Button } from '../Interaction/Button'

function Intro()
{
    return (
        <>
            <div className='IntroContainer'>

                <div className='LeftPanel'>
                    <div className='Title'>Waves.</div>
                    <div class="line"></div>

                    <div className='SubText'> Dynamic image point cloud.
                    </div>
                    <Button buttonStyle='btn--outline' externalLink={ true} path = 'https://www.theonteo.com/' >See More at theonteo.com</Button>
                </div>
                <div className='RightPanel'>
                </div>
            </div>
        </>);
}

export default Intro;