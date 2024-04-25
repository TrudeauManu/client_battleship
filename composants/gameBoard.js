import Grid from "./grid.js";

export default class GameBoard {
    constructor(joueur) {
        this.nom = joueur;
        console.log(joueur)
    }

    createGrid() {
        return new Grid(String(this.nom));
    }

    updateGrid(coordonne, hit) {
        if (hit === 0) {
            document.getElementById(this.nom + "-" + coordonne).className += " bg-indigo-300";
        } else {
            document.getElementById(this.nom + "-" + coordonne).className += " bg-red-300";
        }
    }
}