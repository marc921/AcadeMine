import React from "react";

import '../styles/helpers.css';

export default class Others extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <h1>Quelques conseils:</h1>
          <ul>
            <li><b>Google est votre ami</b>: taper "... tutorial" ou recopier un message d'erreur dans la barre de recherche est un réflexe à avoir avant de dire "Je ne sais pas".<br/>
                Les réponses StackOverflow sont quasiment toujours les meilleures.</li>
          </ul>
          <h1>Sites sympathiques:</h1>
          <ul>
            <li><a href="https://www.codingame.com/home">CodinGame</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
