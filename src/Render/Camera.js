/*****************************************************************************/
/*!
\file Camera.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains point-cloud application
\Not for distribution
*/
/*****************************************************************************/

import * as THREE from 'three';

/******************************************************************************/
/*!
\brief  main 3d camera
*/
/******************************************************************************/
export default class Camera
{
  //constructor
  constructor(_options)
  {
    this.quat = new THREE.Euler(0,0,0);
    this.width = _options.width;
    this.height = _options.height;

    //set position
    this.position = _options.position;
    this.rotation = _options.rotation;

    //new three.js camera
    this.threeCamera =
    new THREE.OrthographicCamera( this.width / - 2, this.width / 2, this.eight / 2, this.height / - 2, 1, 1000 );
    this.setPosition(this.position);
    this.setRotation(this.rotation);

    this.addListener();
    this.setScreenResolution(window.innerWidth, window.innerHeight);

  }
  setScreenResolution(width, height)
  {
    this.threeCamera =
    new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
  }
  addListener()
  {
    window.addEventListener('resize', () =>
    {
      this.setScreenResolution(window.innerWidth, window.innerHeight);
    });
  }

  setPosition(vec)
  {
    this.position = vec;
    this.threeCamera.position.x = this.position.x;
    this.threeCamera.position.y = this.position.y;
    this.threeCamera.position.z = this.position.z;
  }
  setRotation(vec)
  {
    this.rotation = vec;
    this.quat.x = this.rotation.x;
    this.quat.y = this.rotation.y;
    this.quat.z = this.rotation.z;
    this.threeCamera.setRotationFromEuler(this.quat);
  }
}