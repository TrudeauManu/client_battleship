import GameBoard from "./composants/gameBoard.js";

export default class Partie {
    constructor(joueur1, joueur2, gameBoardJ1, gameBoardJ2) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.gameBoardJ1 = gameBoardJ1;
        this.gameBoardJ2 = gameBoardJ2;
    }

    async JouerLaPartie() {
        const premierJoueur = Math.random() < 0.5 ? this.joueur1 : this.joueur2;
        const deuxiemeJoueur = premierJoueur === this.joueur1 ? this.joueur2 : this.joueur1;

        let joueurActuel = premierJoueur;
        let autreJoueur = deuxiemeJoueur;

        const playTurn = async () => {
            const coordonnee = await joueurActuel.shoot();
            const resultat = autreJoueur.checkHit(coordonnee);
            await joueurActuel.updateMissile(coordonnee, resultat);

            let block = document.getElementById(coordonnee);

            if (joueurActuel === premierJoueur) {
                this.gameBoardJ1.updateGrid(coordonnee, resultat)
            } else {
                this.gameBoardJ2.updateGrid(coordonnee, resultat)
            }

            console.log(joueurActuel.getNom() + " a tirer la: " + coordonnee + " et cela a " + resultat)

            if (resultat !== 0 && autreJoueur.aPerdu()) {
                return joueurActuel.getNom();
            }

            const temp = joueurActuel;
            joueurActuel = autreJoueur;
            autreJoueur = temp;

            setTimeout(playTurn, 250);
        };

        await playTurn();
    }
}
