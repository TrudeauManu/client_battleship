import Grid from "./grid.js";
import NameTag from "./nameTag";
import Bateaux from "./bateaux";
import BoutonQuitter from "./boutonQuitter";
import BoutonResumePause from "./pause";

/**
 * Classe du GameBoard.
 */
export default class GameBoard {
    constructor(joueur1, joueur2, scoreJoueur1, scoreJoueur2) {
        this.nomJoueur1 = joueur1;
        this.nomJoueur2 = joueur2;
        this.scoreJoueur1 = scoreJoueur1;
        this.scoreJoueur2 = scoreJoueur2;
    }

    /**
     * Fonction qui crée la GameBoard.
     *
     * @returns {HTMLDivElement} Le GameBoard.
     */
    createGameBoard() {
        let gameBoard = document.createElement("div");
        gameBoard.id = "gameBoard";
        gameBoard.classList.add("flex", "flex-col");

        gameBoard.appendChild(NameTag(String(this.nomJoueur1), String(this.nomJoueur2), this.scoreJoueur1, this.scoreJoueur2));

        let gridDiv = document.createElement("div");
        gridDiv.id = "gridDiv";
        gridDiv.classList.add("flex", "flex-row", 'justify-around')
        gameBoard.appendChild(gridDiv);

        let gridJoueur1 = document.createElement("div");
        let gridJoueur2 = document.createElement("div");
        gridJoueur1.classList.add('flex', 'flex-col', 'max-w-600', 'justify-items-center', 'items-center');
        gridJoueur2.classList.add('flex', 'flex-col', 'max-w-600', 'justify-items-center', 'items-center');

        gridJoueur1.appendChild(Grid(String(this.nomJoueur1)));
        gridJoueur1.appendChild(Bateaux(String(this.nomJoueur1)))
        gridJoueur2.appendChild(Grid(String(this.nomJoueur2)));
        gridJoueur2.appendChild(Bateaux(String(this.nomJoueur2)))

        const recyclerView = document.createElement("div");
        recyclerView.className = "recycler-view shadow-2xl shadow-gray-900 bg-transparent text-white font-bold";
        recyclerView.id = "recycler-view";

        let middleBox = document.createElement("div");
        middleBox.id = "middleBox";
        middleBox.classList.add("flex", "flex-col");
        middleBox.appendChild(recyclerView);
        //middleBox.appendChild(boutonPause());
        middleBox.appendChild(BoutonQuitter());


        gridDiv.appendChild(gridJoueur1);
        gridDiv.appendChild(middleBox);
        gridDiv.appendChild(gridJoueur2);

        return gameBoard
    }

    /**
     * Fonction pour update la grid.
     *
     * @param joueur Le joueur.
     * @param coordonne La coordonnee.
     * @param hit Le résultat du missile.
     */
    updateGrid(joueur, coordonne, hit) {
        if (hit === 0) {
            document.getElementById(String(joueur) + "-" + coordonne).classList.add("bg-blue-400");
        } else {
            document.getElementById(String(joueur) + "-" + coordonne).classList.add("bg-red-400");
        }
    }

    /**
     * Fonction pour update l'état des bateaux.
     *
     * @param joueur Le joueur.
     * @param resultat Le résultat du missile.
     */
    updateBateaux(joueur, resultat) {
        switch (resultat) {
            case 2:
                document.getElementById( String(joueur) + "-porte-avions").src = "../images/porte-avions-v2-couler.png"
                break;
            case 3:
                document.getElementById(String(joueur) + "-cuirasse").src = "../images/cuirasse-v2-couler.png"
                break;
            case 4:
                document.getElementById(String(joueur) + "-destroyer").src = "../images/destroyer-v2-couler.png"
                break;
            case 5:
                document.getElementById(String(joueur) + "-sous-marin").src = "../images/sous-marin-v2-couler.png"
                break;
            default:
                document.getElementById(String(joueur) + "-patrouilleur").src = "../images/patrouilleur-v2-couler.png"
                break;
        }
    }
}
