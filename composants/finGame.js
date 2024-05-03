/**
 * Fonction qui crée le message de fin de partie et le bouton pour rejouer.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @param resultat Le résultat de la partie.
 * @param form Le formulaire.
 * @returns {HTMLDivElement} La div contenant le message et le bouton rejouer.
 */
export function finGame(resultat, form) {
    const main = document.getElementById("main");

    const vainqueur = document.createElement("h1");
    vainqueur.textContent = "VAINQUEUR : " + resultat.vainqueur.nom;
    vainqueur.className = "font-bold text-3xl text-white mb-6";

    const scoreDiv = document.createElement("div");
    scoreDiv.className = "flex flex-col justify-center items-center align-center text-center text-3xl text-white";

    const nomJoueurs = document.createElement("h1");
    nomJoueurs.textContent = resultat.vainqueur.nom + " vs " + resultat.perdant.nom;

    const scoreJoueurs = document.createElement("h1");
    scoreJoueurs.textContent = resultat.vainqueur.score + " - " + resultat.perdant.score;

    scoreDiv.appendChild(nomJoueurs);
    scoreDiv.appendChild(scoreJoueurs);

    const button = document.createElement('button');
    button.textContent = 'Rejouer';
    button.className = "mt-12 px-4 py-2 bg-orange-600 text-white text-xl font-bold rounded-xl hover:bg-red-700 uppercase";
    button.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(form);
    })

    const div = document.createElement('div');
    div.className = "flex flex-col items-center justify-center";
    div.appendChild(vainqueur);
    div.appendChild(scoreDiv);
    div.appendChild(button);

    return div;
}
