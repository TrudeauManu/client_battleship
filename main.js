import './styles.css';
import BestOf3 from "./Partie/bestOf3";
import {finGame} from "./composants/finGame";
import {sauvegarderValeursFormulaire} from "./Historique/formulaire";

const form = document.getElementById('joueursForm');
const main = document.getElementById('main');

window.addEventListener('load', function() {
    document.getElementById('joueur1Nom').value = localStorage.getItem('joueur1Nom') || '';
    document.getElementById('joueur1Url').value = localStorage.getItem('joueur1Url') || '';
    document.getElementById('joueur1Token').value = localStorage.getItem('joueur1Token') || '';

    document.getElementById('joueur2Nom').value = localStorage.getItem('joueur2Nom') || '';
    document.getElementById('joueur2Url').value = localStorage.getItem('joueur2Url') || '';
    document.getElementById('joueur2Token').value = localStorage.getItem('joueur2Token') || '';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    sauvegarderValeursFormulaire();
    const joueur1Nom = document.getElementById('joueur1Nom').value;
    const joueur1Url = document.getElementById('joueur1Url').value;
    const joueur1Token = document.getElementById('joueur1Token').value;

    const joueur2Nom = document.getElementById('joueur2Nom').value;
    const joueur2Url = document.getElementById('joueur2Url').value;
    const joueur2Token = document.getElementById('joueur2Token').value;

    form.remove();

    const bestOf3 = new BestOf3(joueur1Nom, joueur1Token, joueur1Url, joueur2Nom, joueur2Token, joueur2Url);
    bestOf3.createBestOf3().then((gagnant) => {
        main.innerHTML = '';
        main.appendChild(finGame(gagnant, form));
    });
});
