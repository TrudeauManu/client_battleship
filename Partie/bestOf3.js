import Joueur from "./joueur";
import GameBoard from "../composants/gameBoard";
import jouerUnePartie from "./partie";

/**
 * Fonction qui crée une partie de 2 de 3.
 *
 * @param joueur1Nom Le nom du joueur 1.
 * @param joueur1Token Le token du joueur 1.
 * @param joueur1Url L'url du joueur 1.
 * @param joueur2Nom Le nom du joueur 2.
 * @param joueur2Token Le token du joueur 2.
 * @param joueur2Url L'url du joueur 2.
 * @returns {Promise<{vainqueur: {score: number, nom}, perdant: {score: number, nom}}>} Un objet contenant le vainqueur
 * et le perdant du 2 de 3.
 */
export default async function createBestOf3(joueur1Nom, joueur1Token, joueur1Url, joueur2Nom, joueur2Token, joueur2Url) {
    let joueur1Victoires = 0;
    let joueur2Victoires = 0;


    for (let i = 0; i < 3; i++) {
        const joueur1 = new Joueur(joueur1Nom, joueur1Token, joueur1Url);
        const joueur2 = new Joueur(joueur2Nom, joueur2Token, joueur2Url);

        await joueur1.getShips(joueur2Nom);
        await joueur2.getShips(joueur1Nom);

        let gameBoard = new GameBoard(joueur1Nom, joueur2Nom, joueur1Victoires, joueur2Victoires);

        const main = document.getElementById('main');
        main.innerHTML = '';
        main.appendChild(gameBoard.createGameBoard())

        const vainqueur = await jouerUnePartie(joueur1, joueur2, gameBoard);

        if (vainqueur === joueur1Nom) {
            joueur1Victoires++;
        } else if (vainqueur === joueur2Nom) {
            joueur2Victoires++;
        }

        await joueur1.delete();
        await joueur2.delete();

        document.getElementById('score').innerText = String(joueur1Victoires) + " - " + String(joueur2Victoires);
        if (joueur1Victoires === 2 || joueur2Victoires === 2) break;

        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    if (joueur1Victoires > joueur2Victoires) {
        return {
            vainqueur: { nom: joueur1Nom, score: joueur1Victoires },
            perdant: { nom: joueur2Nom, score: joueur2Victoires },
        };
    } else if (joueur2Victoires > joueur1Victoires) {
        return {
            vainqueur: { nom: joueur2Nom, score: joueur2Victoires },
            perdant: { nom: joueur1Nom, score: joueur1Victoires },
        };
    }
};
