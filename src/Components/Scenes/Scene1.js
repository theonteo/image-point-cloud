/*****************************************************************************/
/*!
\file Scene2.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains point-cloud application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from "three";

//renderer related
import CloudModel from "../../Render/CloudModel";
import Scene from "./Scene";
import img from "../../Images/img-profile.jpg"

import { Vector3 } from "three";

/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene1 extends Scene
{
  //constructor
  constructor(_options)
  {
    super(_options);

    //add main room model
    this.cloud = new CloudModel({

      //cloud setting
      pixelStep: 10,
      pointScale: 7,
      cloudScale: 0.85,
      deleteThreshold: 25,

      texture: img,
      scene: this.scene
    });
    this.scene.background = null;
    this.startRender();
    this.newCamera.setPosition(new THREE.Vector3(0, 0, 1000));
  }
  /******************************************************************************/
  /*!
  \brief  update per frame
  */
  /******************************************************************************/
  Update()
  {


    this.newCamera.setPosition(new THREE.Vector3(0, 0, 1000));

    if (this.cloud.loaded)
      this.cloud.updateModel();

    this.newCamera.threeCamera.lookAt(new Vector3(0, 0, 0));
  }

}

export default Scene1