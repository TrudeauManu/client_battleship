import Grid from "./grid.js";
import NameTag from "./nameTag";

export default class GameBoard {
    constructor(joueur) {
        this.nom = joueur;
        console.log(joueur)
    }

    createGrid() {
        let board = document.createElement("div");
        board.classList.add("flex", "flex-col", "shadow-gray-900", "shadow-2xl", "rounded-2xl", "p-3");
        board.id = "board"

        board.appendChild(new NameTag(String(this.nom)));

        let divGrid = document.createElement("div");
        divGrid.classList.add("flex", "flex-row");
        divGrid.id = "test"

        let divImage = document.createElement("div");
        divImage.classList.add("flex", "flex-col", "justify-center");

        let porteAvions = document.createElement("img");
        porteAvions.src = "../images/porte-avions-v2.webp";
        porteAvions.className = "bateaux";

        let cuirasse = document.createElement("img");
        cuirasse.src = "../images/cuirasse-v2.png";
        cuirasse.className = "bateaux";

        let sousMarin = document.createElement("img");
        sousMarin.src = "../images/sous-marin-v2.png";
        sousMarin.className = "bateaux";

        let destroyer = document.createElement("img");
        destroyer.src = "../images/destroyer-v2.png";
        destroyer.className = "bateaux";

        let patrouilleur = document.createElement("img");
        patrouilleur.src = "../images/patrouilleur-v2.webp";
        patrouilleur.className = "bateaux";

        divImage.appendChild(porteAvions);
        divImage.appendChild(cuirasse);
        divImage.appendChild(sousMarin);
        divImage.appendChild(destroyer);
        divImage.appendChild(patrouilleur);

        divGrid.appendChild(divImage);
        divGrid.appendChild(new Grid(String(this.nom)));

        board.appendChild(divGrid);

        return board;
    }

    updateGrid(coordonne, hit) {
        if (hit === 0) {
            document.getElementById(this.nom + "-" + coordonne).classList.add("bg-blue-400");
        } else {
            document.getElementById(this.nom + "-" + coordonne).classList.add("bg-red-400");
        }
    }
}
