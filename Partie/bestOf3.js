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

            const partie = new Partie(joueur1, joueur2, GBJoueur1, GBJoueur2);

            const vainqueur = await partie.JouerLaPartie();

            if (vainqueur === this.joueur1Nom) {
                joueur1Victoires++;
            } else if (vainqueur === this.joueur2Nom) {
                joueur2Victoires++;
            }

            if (joueur1Victoires === 2 || joueur2Victoires === 2) break;
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        let vainqueur;
        if (joueur1Victoires > joueur2Victoires) {
            vainqueur = this.joueur1Nom;
        } else if (joueur2Victoires > joueur1Victoires) {
            vainqueur = this.joueur2Nom;
        }

        const main = document.getElementById('main');
        const resultatFinal = document.createElement("div");
        resultatFinal.textContent = "Le vainqueur du 2 de 3 est : " + vainqueur;
        resultatFinal.className = "font-bold text-3xl";
        main.innerHTML = '';
        main.appendChild(resultatFinal);
        return vainqueur;
    };
}
