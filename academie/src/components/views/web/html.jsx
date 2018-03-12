import React from "react";

import { WebNav } from './home';
import '../../styles/helpers.css';

export default class HTML extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3">OpenClassrooms: HTML5 et CSS3</a></li>
            <li><a href="https://www.w3schools.com/html/default.asp">W3Schools: HTML5</a></li>
          </ul>
        </div>
      </div>
    );
  }
}