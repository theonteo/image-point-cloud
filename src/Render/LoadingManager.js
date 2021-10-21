/*****************************************************************************/
/*!
\file LoadingManager.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from 'three';
import React, { Component } from "react";
import './LoadingManager.css'
/******************************************************************************/
/*!
\brief  main 3d camera
*/
/******************************************************************************/
class LoadingManager extends Component
{

    state = {
        progressWidth: "0%",
        hideScreen: true
    }
    constructor(_options)
    {

        super(_options);
        this.setState({
            progressWidth: "0%"
        });
        this.update();
    }

    update()
    {

        THREE.DefaultLoadingManager.onStart =
            function (url, itemsLoaded, itemsTotal)
            {

                console.log
                    ('Started loading file: ' + url + '.\nLoaded ' +
                        itemsLoaded + ' of ' + itemsTotal + ' files.');

            };
        THREE.DefaultLoadingManager.onLoad = function ()
        {
            console.log('Loading Complete!');
        };

        THREE.DefaultLoadingManager.onProgress =
            (url, itemsLoaded, itemsTotal) =>
            {

                this.setState({
                    progressWidth: (itemsLoaded / itemsTotal * 100) + "%"
                });
                if (itemsLoaded / itemsTotal > 0.99)
                {
                    this.setState({
                        hideScreen: false
                    });
                }

                console.log
                    ('Loading file: ' + url + '.\nLoaded ' +
                        itemsLoaded + ' of ' + itemsTotal + ' files.');
            };

        THREE.DefaultLoadingManager.onError = function (url) 
        {

            console.log
                ('There was an error loading ' + url);

        };

    }
    render()
    {
        return (
            <>
                <div className='loading-container' >
                    <div className='loading-background' style={{ background: !this.state.hideScreen ? "rgba(21, 21, 21,0)" : "rgb(21, 21, 21) " }}>
                        <div className='progress' style={{ zIndex: this.state.hideScreen ? 999 : -999, background: !this.state.hideScreen ? "rgba(51, 51, 51,0)" : "rgb(51, 51, 51) " }} >
                            <div className='progress2'
                                style={{ zIndex: this.state.hideScreen ? 999 : -999, width: this.state.progressWidth, background: !this.state.hideScreen ? "rgba(0, 255, 234,0) " : "rgb(0, 255, 234) " }} >
                            </div>
                        </div>
                    </div>
                </div>
            </>);

    }
}
export default LoadingManager;