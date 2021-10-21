/*****************************************************************************/
/*!
\file ProjectCard.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import { React } from 'react'

import './ProjectCard.css'
import '.././font.css'
import { Button } from '../Interaction/Button'
import imgEngine from '../../Images/img-engine.jpg'
import imgPortfolio from '../../Images/img-portfolio.jpg'

function ProjectCard()
{
  //reset scroll to top
  const goToTop = ()=>{
    document.documentElement.scrollTop = 0;
  };
  
  return (

      <div class="project-container">
        <div class="project-label">A showcase of</div>
        <h4 class="project-title">Various Projects</h4>
        <div class="project-line"></div>
        <div class="project">
          <div class="project-content">
            <div class="project-label">Rendering</div>
            <h4 class="project-title">SIMPLE. Engine</h4>
            <div class="project-line"></div>
            <div class="project-details">
              <p>Built with OpenGL. It is a 2D/3D Proprietary Engine built to house various interactive applications. With the engine undergoing iterations through a span of 2 to 3 years.

                For the engine I primarily focused on Graphics , Technical Art , Tools and Editor with an emphasis on Graphics and Technical Art.
              </p>
              <div class="project-list-wrapper">
                <div class="project-list">
                  <div class="project-item">OpenGL</div>
                  <div class="project-item"> ImGui</div>
                  <div class="project-item"> JsonCpp</div>
                  <div class="project-item"> C++</div>
                  <div class="project-item"> C#</div>
                </div>
              </div>
            </div>
            <Button buttonStyle='btn--outline' path= '/project-simple' onClick={goToTop} > Explore...</Button>
          </div>
          <div class="project-img">
            <img src={imgEngine} alt="" />
          </div>
        </div>
        <div class="invert">
          <div class="project">
            <div class="project-content">
              <div class="project-label">Frontend Development</div>
              <h4 class="project-title">Portfolio Website</h4>
              <div class="project-line"></div>
              <div class="project-details">
                <p>This is the first website I have built from scratch and it is designed to expand my knowledge on frontend development.

                  Some of the experiments include real time rendering of 3d browser backgrounds while making the website responsive for web and mobile.

                  For the assets of the website - arnold renderer is being used for lights mapping the scene with the map being combined into a mesh.
                </p>
                <div class="project-list-wrapper">
                  <div class="project-list">
                    <div class="project-item">React</div>
                    <div class="project-item"> Html</div>
                    <div class="project-item"> CSS</div>
                    <div class="project-item"> Javascript</div>
                  </div>
                  <div class="project-list">
                    <div class="project-item"> three.js</div>
                    <div class="project-item"> webGL</div>
                    <div class="project-item"> Netlify</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-img">
            <img src={imgPortfolio} alt="" />
            </div>
          </div>
        </div>
      </div>

  )
}

export default ProjectCard
