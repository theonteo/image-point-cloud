/*****************************************************************************/
/*!
\file Button.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    path,
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) =>
{
    const checkButtonStyle =
        STYLES.includes(buttonStyle)
            ? buttonStyle : STYLES[0];


    const checkButtonSize =
        SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        
        <Link to={path} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize} `}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>)
};