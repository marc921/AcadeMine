import React from "react";

import { WebNav } from '../home';
import { Link } from '../../nav';
import '../../../styles/helpers.css';

export default class JS extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='page'>
          <div className='content'>
            Le langage Javascript (qui n'a aucun lien avec Java) peut s'utiliser seul ou avec des frameworks.<br/>
            <br/>
            
            <h1>Frameworks</h1>
            <p>Les frameworks sont des surcouches facilitant l'écriture de gros projets en Javascript. Les plus connus sont:</p>
            <ul>
              <li><b>React</b>: facilite la structuration du site et la réutilisabilité du code par un système de composants rappelant la Programmation Orientée Objet.</li>
              <li><b>Angular</b>: bla bla bla.</li>
              <li><b>Node</b>: permet d'utiliser Javascript côté back-end.</li>
              <li><b>JQuery</b>: librairie encapsulant beaucoup de tâches fréquente dans des fonctions pour éviter de multiplier les lignes de code.</li>
            </ul>
            <p>Le format <b>JSON</b> (JavaScript Object Notation) est un format de représentation d'un objet sous la forme d'un texte. Il est facile à lire et écrire. L'échange de données entre les différentes parties d'un site se passe souvent sous le format JSON.</p>
            <p>Cet échange de données se fait souvent par un appel <b>AJAX</b> (Asynchronous Javascript And XML), qui permet de demander ou d'envoyer des données au serveur de manière asynchrone.</p>
            
            <br/>

            <h2>Tutoriels Javascript</h2>
            <ul>
              <li><a href='https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript'>OpenClassrooms - Javascript</a></li>
              <li><a href='https://www.w3schools.com/js/default.asp'>W3Schools - Javascript</a></li>
            <li><a href="https://www.tutorialspoint.com/javascript/index.htm">Tutorials Point: Javascript</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export const JSNav = () => (
  <nav>
    <Link href='/web/js/react' text='React' />
    <Link href='/web/js/angular' text='Angular' />
    <Link href='/web/js/node' text='Node' />
    <Link href='/web/js/jquery' text='JQuery' />
    <Link href='/web/js/json' text='JSON' />
    <Link href='/web/js/ajax' text='AJAX' />
  </nav>
);