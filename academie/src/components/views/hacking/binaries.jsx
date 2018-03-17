import React from "react";

import { HackingNav } from './home.jsx';

export default class HackingBinaries extends React.Component {
  render() {
    return (
      <div>
        <HackingNav />
        <div className='page'>
          <h2>Tutoriels extérieurs</h2>
          <ul>
            <li>
              <h2>Le langage assembleur:</h2>
              Il est possible de désassembler les exécutables pour en voir le code assembleur, très proche du langage machine. Pour trouver les failles dans un exécutable, il faut souvent avoir une certaine connaissance de ce langage.
              <ul>
                <li><a href="https://openclassrooms.com/courses/en-profondeur-avec-l-assembleur">OpenClassrooms: en profondeur avec l'assembleur</a></li>
                <li><a href="https://www.tutorialspoint.com/assembly_programming/index.htm">Tutorials Point: Assembly</a></li>
                <li><a href="https://hackr.io/tutorials/learn-assembly-language">Hackr.io: Learn Assembly Language</a></li>
              </ul>
            </li>
            <li>
              <h2>Buffer Overflow:</h2>
              Jouer sur un input pour modifier la prochaine instruction exécutée par la machine.
              <ul>
                <li><a href="https://dhavalkapil.com/blogs/Buffer-Overflow-Exploit/">Dhaval Kapil: Buffer Overflow</a><br/>
                    Ajouter l'option -no-pie lors de la compilation du code C.</li>
                <li><a href="https://www.exploit-db.com/papers/13171/">Exploit DB: Buffer Overflow Tutorial</a></li>
                <li><a href="https://www.youtube.com/watch?v=1S0aBV-Waeo">YouTube - Computerphile: Buffer Overflow Attack</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


