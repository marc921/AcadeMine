import React from "react";

import { WebNav } from './home';

export default class CSS extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3" >OpenClassrooms: HTML5 et CSS3</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp">W3Schools: CSS</a></li>
            <li><a href="https://www.tutorialspoint.com/css/index.htm">Tutorials Point: CSS</a></li>
          </ul>
        </div>
      </div>
    );
  }
}