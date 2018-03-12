import React from "react";

import { WebNav } from './home';
import '../../styles/helpers.css';

export default class PHP extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql">OpenClassrooms: PHP et MySQL</a></li>
            <li><a href="https://www.w3schools.com/php/default.asp">W3Schools: PHP 5</a></li>
            <li><a href="https://www.tutorialspoint.com/php/index.htm">Tutorials Point: PHP</a></li>
            <li><a href="https://phpdelusions.net/pdo">PHP Delusions: PDO</a><br/>
                Les objets PDO sont un très bon moyen de faire le lien avec la base de données SQL.</li>

          </ul>
        </div>
      </div>
    );
  }
}