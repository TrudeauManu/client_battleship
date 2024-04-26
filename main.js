import './styles.css';
import BestOf3 from "./Partie/bestOf3";

const form = document.getElementById('joueursForm');
const main = document.getElementById('main');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const joueur1Nom = document.getElementById('joueur1Nom').value;
    const joueur1Url = document.getElementById('joueur1Url').value;
    const joueur1Token = document.getElementById('joueur1Token').value;

    const joueur2Nom = document.getElementById('joueur2Nom').value;
    const joueur2Url = document.getElementById('joueur2Url').value;
    const joueur2Token = document.getElementById('joueur2Token').value;

    form.remove();

    const bestOf3 = new BestOf3(joueur1Nom, joueur1Token, joueur1Url, joueur2Nom, joueur2Token, joueur2Url);
    bestOf3.createBestOf3()
        .then(() => {
            new Promise(resolve => setTimeout(resolve, 1000))
            .then(() => {
                main.innerHTML = '';
                main.appendChild(form);
            });
        });
});
