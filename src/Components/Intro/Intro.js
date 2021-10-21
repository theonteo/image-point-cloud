/*****************************************************************************/
/*!
\file Intro.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react'
import './Intro.css'
import { Button } from '../Interaction/Button'

function Intro()
{
    const goToContact = () =>
    {
        var email = "theonteo96@gmail.com";
        var mailto_link = 'mailto:' + email;
        window.open(mailto_link, 'emailWindow');
    };
    return (
        <>
            <div className='IntroContainer'>

                <div className='LeftPanel'>
                    <div className='Title'>Waves.</div>
                    <div class="line"></div>

                    <div className='SubText'> Dynamic waves point cloud
                    </div>
                    <Button buttonStyle='btn--outline' onClick={goToContact}>See More...</Button>
                </div>
                <div className='RightPanel'>
                </div>
            </div>
        </>);
}

export default Intro;