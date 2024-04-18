import './styles.css';
import Joueur from './joueur.js';
import Partie from "./partie.js";

const form = document.getElementById('joueursForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const joueur1Nom = document.getElementById('joueur1Nom').value;
    const joueur1Url = document.getElementById('joueur1Url').value;
    const joueur1Token = document.getElementById('joueur1Token').value;

    const joueur2Nom = document.getElementById('joueur2Nom').value;
    const joueur2Url = document.getElementById('joueur2Url').value;
    const joueur2Token = document.getElementById('joueur2Token').value;

    const joueur1 = new Joueur(joueur1Nom, joueur1Token, joueur1Url);
    const joueur2 = new Joueur(joueur2Nom, joueur2Token, joueur2Url);

    Promise.all([
      joueur1.createPartie(joueur2Nom),
      joueur2.createPartie(joueur1Nom),
    ]).then(() => {
        const partie = new Partie(joueur1, joueur2);
        partie.JouerLaPartie().then(r => console.log("Le vainqueur est: " + r));
    })
});


