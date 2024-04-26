export function finGame(resultat, form) {
    const main = document.getElementById("main");

    const resultatFinal = document.createElement("h2");
    resultatFinal.textContent = "Le vainqueur est " + resultat.vainqueur.nom + " avec un score de " +
        resultat.vainqueur.score + " contre " + resultat.perdant.nom + " avec un score de " + resultat.perdant.score;
    resultatFinal.className = "font-bold text-3xl text-white";

    const button = document.createElement('button');
    button.textContent = 'Rejouer';
    button.className = "mt-4 px-4 py-2 bg-orange-600 text-white text-xl font-bold rounded-xl hover:bg-red-700 uppercase";
    button.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(form);
    })

    const div = document.createElement('div');
    div.className = "flex flex-col items-center justify-center";
    div.appendChild(resultatFinal);
    div.appendChild(button);

    return div;
}
