import React from "react";

export default class Linux extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <p>
            Linux est une famille de système d'exploitations (OS), comprenant des distributions comme Ubuntu, Kali, Gnome et bien d'autres, dont la particularité est d'être entièrement gratuite et open source.<br/>
            Les OS Linux fait tourner environ 3% des ordinateurs de bureau (contre environ 90% sur Windows, 6% sur MacOS et le reste sur des OS indépendants), mais une grande majorité des serveurs, et donc des machines avec lesquelles vous communiquez quotidiennement. Le noyau (kernel) Linux est aussi réutilisé dans d'autres OS tels qu'Android, beaucoup de systèmes embarqués, la quasi-totalité des super-ordinateurs, l'industrie cinématographique et les infrastructures gouvernementales.<br/>
            Linux ne propose pas plus de jeux vidéos, pas de meilleurs éditeurs de texte, de logiciels d'animation 3D ou de retouches photo que Windows ou MacOS.<br/>
            Linux propose en contrepartie des centaines de programmes créés par des indépendants, un terminal vous donnant un total contrôle sur votre machine, et surtout des outils d'aide au développement que vous ne trouverez nulle part ailleurs. Linux propose les meilleurs OS pour programmer, en particulier pour le Web ou la cybersécurité.
            Le grand plus de Linux est le terminal (ou ligne de commande), qui permet en une ligne d'installer un programme, lancer un script, trouver un fichier, renommer 1 000 fichiers, se connecter à un serveur SFTP ou SSH...
          </p>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://www.ubuntu.com/">Ubuntu</a></li>
            <li><a href="https://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux">OpenClassrooms: Linux (Ubuntu)</a></li>
            <li><a href="https://www.javatpoint.com/linux-tutorial">Java T Point: Linux tutorial</a></li>
            <li><a href="https://www.tutorialspoint.com/unix/index.htm">Java T Point: Linux tutorial</a></li>
            <li><a href="https://ryanstutorials.net/linuxtutorial/">Bash command line tutorial</a></li>
            <li><a href="https://www.kali.org/">Kali</a></li>
            <li><a href="https://www.gnome.org/">Gnome</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
