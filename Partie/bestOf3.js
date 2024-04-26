import Joueur from "./joueur";
import Partie from "./partie";
import GameBoard from "../composants/gameBoard";

export default class BestOf3 {
    constructor(joueur1Nom, joueur1Token, joueur1Url, joueur2Nom, joueur2Token, joueur2Url) {
        this.joueur1Nom = joueur1Nom;
        this.joueur1Token = joueur1Token;
        this.joueur1Url = joueur1Url;
        this.joueur2Nom = joueur2Nom;
        this.joueur2Token = joueur2Token;
        this.joueur2Url = joueur2Url;
    }

    async createBestOf3() {
        let joueur1Victoires = 0;
        let joueur2Victoires = 0;


        for (let i = 0; i < 3; i++) {
            const joueur1 = new Joueur(this.joueur1Nom, this.joueur1Token, this.joueur1Url);
            const joueur2 = new Joueur(this.joueur2Nom, this.joueur2Token, this.joueur2Url);

            await joueur1.createPartie(this.joueur2Nom);
            await joueur2.createPartie(this.joueur1Nom);

            let gameBoard = new GameBoard(this.joueur1Nom, this.joueur2Nom, joueur1Victoires, joueur2Victoires);

            const main = document.getElementById('main');
            main.innerHTML = '';
            main.appendChild(gameBoard.createGameBoard())

            const partie = new Partie(joueur1, joueur2, gameBoard);
            const vainqueur = await partie.JouerLaPartie();

            if (vainqueur === this.joueur1Nom) {
                joueur1Victoires++;
            } else if (vainqueur === this.joueur2Nom) {
                joueur2Victoires++;
            }

            document.getElementById('score').innerText = String(joueur1Victoires) + " - " + String(joueur2Victoires);
            if (joueur1Victoires === 2 || joueur2Victoires === 2) break;
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        if (joueur1Victoires > joueur2Victoires) {
            return {
                vainqueur: { nom: this.joueur1Nom, score: joueur1Victoires },
                perdant: { nom: this.joueur2Nom, score: joueur2Victoires },
            };
        } else if (joueur2Victoires > joueur1Victoires) {
            return {
                vainqueur: { nom: this.joueur2Nom, score: joueur2Victoires },
                perdant: { nom: this.joueur1Nom, score: joueur1Victoires },
            };
        }
    };
}
