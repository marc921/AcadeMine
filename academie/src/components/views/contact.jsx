import React from "react";

import '../styles/helpers.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <a href="https://academine.slack.com/messages/C9NG8PCSF/"><h1>Slack</h1></a>
          <p>
            Que ce soit pour des remarques ou pour une contribution, nous serons très heureux de vous accueillir sur le slack d'AcadéMine.
          </p>

          <a href="https://trello.com/b/RZYEOxhW/acad%C3%A9mine"><h1>Trello</h1></a>
          <p>
            Découvrez ce que l'équipe d'AcadéMine vous réserve pour l'avenir et proposez nous des idées !
          </p>
          
        </div>
      </div>
    );
  }
}