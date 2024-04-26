import RecyclerView from "../Historique/RecyclerView";

export default class Partie {
    constructor(joueur1, joueur2, gameBoardJ1, gameBoardJ2) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.gameBoardJ1 = gameBoardJ1;
        this.gameBoardJ2 = gameBoardJ2;
        this.historique = new RecyclerView();
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

            if (joueurActuel === premierJoueur) {
                this.gameBoardJ1.updateGrid(coordonnee, resultat)
            } else {
                this.gameBoardJ2.updateGrid(coordonnee, resultat)
            }

            let resultatTexte;
            switch (resultat) {
                case 0: resultatTexte = 'À l\'eau'; break;
                case 1: resultatTexte = 'Touché'; break;
                case 2: resultatTexte = 'Porte-avions coulé'; break;
                case 3: resultatTexte = 'Cuirassé coulé'; break;
                case 4: resultatTexte = 'Destroyer coulé'; break;
                case 5: resultatTexte = 'Sous-marin coulé'; break;
                case 6: resultatTexte = 'Patrouilleur coulé'; break;
            }

            this.historique.updateRecyclerView("[" + joueurActuel.getNom()+ "] " + coordonnee + ": " + resultatTexte);

            if (resultat !== 0 && autreJoueur.aPerdu()) {
                return joueurActuel.getNom();
            }

            const temp = joueurActuel;
            joueurActuel = autreJoueur;
            autreJoueur = temp;

            await new Promise(resolve => setTimeout(resolve, 50));
            return playTurn();
        };

        return await playTurn();
    }
}
