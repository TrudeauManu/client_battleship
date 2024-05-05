import NumberRow from "./numberRow.js";
import GameRow from "./gameRow.js";

/**
 * Fonction qui crée la grid du battleship.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @param nomJoueur Le nom du joueur.
 * @returns {HTMLDivElement} La grid.
 */
function Grid(nomJoueur) {
  const grid = document.createElement('div')
  grid.className = "flex flex-col m-2 text-white"

  for (let col = 0; col < 11; col++) {
    if (col === 0 ) {
      grid.appendChild(NumberRow());
    } else {
      let gameRow = GameRow(col, nomJoueur)
      grid.appendChild(gameRow);
    }
  }

  return grid;
}

export default Grid;
