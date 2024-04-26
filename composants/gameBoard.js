import Grid from "./grid.js";
import NameTag from "./nameTag";
import Bateaux from "./bateaux";
import RecyclerView from "../Historique/RecyclerView";
import BoutonQuitter from "./boutonQuitter";

export default class GameBoard {
    constructor(joueur1, joueur2) {
        this.nomJoueur1 = joueur1;
        this.nomJoueur2 = joueur2;
        this.recyclerView = new RecyclerView();
    }

    createGameBoard() {
        let gameBoard = document.createElement("div");
        gameBoard.id = "gameBoard";
        gameBoard.classList.add("flex", "flex-col");

        gameBoard.appendChild(new NameTag(String(this.nomJoueur1), String(this.nomJoueur2)));

        let gridDiv = document.createElement("div");
        gridDiv.id = "gridDiv";
        gridDiv.classList.add("flex", "flex-row", 'justify-around')
        gameBoard.appendChild(gridDiv);

        let gridJoueur1 = document.createElement("div");
        let gridJoueur2 = document.createElement("div");
        gridJoueur1.classList.add('flex', 'flex-col', 'max-w-600', 'justify-items-center', 'items-center');
        gridJoueur2.classList.add('flex', 'flex-col', 'max-w-600', 'justify-items-center', 'items-center');

        gridJoueur1.appendChild(new Grid(String(this.nomJoueur1)));
        gridJoueur1.appendChild(new Bateaux(String(this.nomJoueur1)))
        gridJoueur2.appendChild(new Grid(String(this.nomJoueur2)));
        gridJoueur2.appendChild(new Bateaux(String(this.nomJoueur2)))

        const recyclerView = document.createElement("div");
        recyclerView.className = "recycler-view shadow-2xl shadow-gray-900 bg-transparent text-white font-bold";
        recyclerView.id = "recycler-view";

        let middleBox = document.createElement("div");
        middleBox.id = "middleBox";
        middleBox.classList.add("flex", "flex-col");
        middleBox.appendChild(recyclerView);
        middleBox.appendChild(new BoutonQuitter())


        gridDiv.appendChild(gridJoueur1);
        gridDiv.appendChild(middleBox);
        gridDiv.appendChild(gridJoueur2);

        return gameBoard
    }


    updateGrid(joueur, coordonne, hit) {
        if (hit === 0) {
            document.getElementById(String(joueur) + "-" + coordonne).classList.add("bg-blue-400");
        } else {
            document.getElementById(String(joueur) + "-" + coordonne).classList.add("bg-red-400");
        }
    }

    updateBateaux(joueur, resultat) {
        console.log(resultat)
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
