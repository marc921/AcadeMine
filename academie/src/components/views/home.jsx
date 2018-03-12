import React from "react";

import '../styles/helpers.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='content'>
          <h1>Bienvenue à l'AcadéMine !</h1>
          <p>
            Ce site a vocation à faciliter l'apprentissage de la programmation en proposant un recueil de tutoriels classés par catégories.<br/>
            Notre mission consiste à recueillir un maximum de bons tutoriels dans différents domaines pour vous aider à vous lancer de la manière la plus simple et agréable possible.<br/>
            Si vous pensez pouvoir apporter votre pierre à l'édifice, <a href="mailto:marc.brun@mines-paristech.fr">contactez-nous</a> ! 
          </p>

          <br/><br/><br/>
            
          <h2>Sites à connaitre</h2>
          <ul>
            <li><a href='https://openclassrooms.com'>Cours - OpenClassrooms</a></li>
            <li><a href='https://stackoverflow.com'>Forums - Stack Overflow</a></li>
          </ul>

        </div>
      </div>
    );
  }
}