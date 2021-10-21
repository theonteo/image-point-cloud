/*****************************************************************************/
/*!
\file App.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains point-cloud application
\Not for distribution
*/
/*****************************************************************************/

import React from "react";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";

import './App.css';
import Home from "./Components/Pages/Home"
//renders html
function App()
{
  return (
    <div className='main'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;