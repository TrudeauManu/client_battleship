import Historique from "../Historique/Historique";

/**
 * Fonction qui joue une seule partie.
 *
 * @param joueur1 Le joueur 1.
 * @param joueur2 Le joueur 2.
 * @param gameBoard Le gameboard de la partie.
 * @returns {Promise<*>} Le nom du vainqueur de la partie.
 */
export default async function jouerUnePartie(joueur1, joueur2, gameBoard) {
    const historique = new Historique()
    const premierJoueur = Math.random() < 0.5 ? joueur1 : joueur2;
    const deuxiemeJoueur = premierJoueur === joueur1 ? joueur2 : joueur1;

    let joueurActuel = premierJoueur;
    let autreJoueur = deuxiemeJoueur;

    const playTurn = async () => {
        const coordonnee = await joueurActuel.shoot();
        const resultat = autreJoueur.checkHit(coordonnee);
        await joueurActuel.updateMissile(coordonnee, resultat);

        if (joueurActuel === premierJoueur) {
            gameBoard.updateGrid(premierJoueur.nom, coordonnee, resultat)
            if (resultat > 1) {
                gameBoard.updateBateaux(premierJoueur.nom, resultat)
            }

        } else {
            gameBoard.updateGrid(deuxiemeJoueur.nom, coordonnee, resultat)
            if (resultat > 1) {
                gameBoard.updateBateaux(deuxiemeJoueur.nom, resultat)
            }
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

        historique.update("[" + joueurActuel.getNom()+ "] " + coordonnee + ": " + resultatTexte);

        if (resultat !== 0 && autreJoueur.aPerdu()) {
            return joueurActuel.getNom();
        }

        const temp = joueurActuel;
        joueurActuel = autreJoueur;
        autreJoueur = temp;

        await new Promise(resolve => setTimeout(resolve, 350));
        return playTurn();
    };

    return await playTurn();
}
