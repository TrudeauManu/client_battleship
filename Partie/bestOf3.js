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

            let GBJoueur1 = new GameBoard(this.joueur1Nom + " " + joueur1Victoires);
            let GBJoueur2 = new GameBoard(this.joueur2Nom + " " + joueur2Victoires);

            const main = document.getElementById('main');
            main.innerHTML = '';
            main.appendChild(GBJoueur1.createGrid())
            main.appendChild(GBJoueur2.createGrid())

            const recyclerView = document.createElement("div");
            recyclerView.className = "recycler-view rounded-2xl shadow-2xl shadow-gray-900 bg-transparent text-white font-bold";
            recyclerView.id = "recycler-view";
            main.appendChild(recyclerView);

            const buttonAnuller = document.createElement("button");
            buttonAnuller.className = "rounded-2xl px-4 py-2 font-bold text-white bg-red-600 max-w-24 mx-auto mt-4";
            buttonAnuller.addEventListener("click", (e) => {
                location.reload();
            });
            buttonAnuller.textContent = "Quitter";

            const body = document.getElementById("body");
            body.appendChild(buttonAnuller);

            const partie = new Partie(joueur1, joueur2, GBJoueur1, GBJoueur2);

            const vainqueur = await partie.JouerLaPartie();

            if (vainqueur === this.joueur1Nom) {
                joueur1Victoires++;
            } else if (vainqueur === this.joueur2Nom) {
                joueur2Victoires++;
            }

            await joueur1.delete();
            await joueur2.delete();

            if (joueur1Victoires === 2 || joueur2Victoires === 2) break;
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        let vainqueur;
        let scoreVainqueur;
        let perdant;
        let perdantScore;
        if (joueur1Victoires > joueur2Victoires) {
            vainqueur = this.joueur1Nom;
            scoreVainqueur = joueur1Victoires;
            perdant = this.joueur2Nom;
            perdantScore = joueur2Victoires;
        } else if (joueur2Victoires > joueur1Victoires) {
            vainqueur = this.joueur2Nom;
            scoreVainqueur = joueur2Victoires;
            perdant = this.joueur1Nom;
            perdantScore = joueur1Victoires;
        }

        return {
            vainqueur: { nom: vainqueur, score: scoreVainqueur},
            perdant : { nom: perdant, score: perdantScore }
        };
    };
}
