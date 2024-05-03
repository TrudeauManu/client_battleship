import NumberRow from "./numberRow.js";
import GameRow from "./gameRow.js";

/**
 * Fonction qui crée la grid du battleship.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @param joueur Le joueur.
 * @returns {HTMLDivElement} La grid.
 */
function Grid(joueur) {
  const Grid = document.createElement('div')
  Grid.className = "flex flex-col m-2 text-white"

  for (let col = 0; col < 11; col++) {
    if (col === 0 ) {
      Grid.appendChild(NumberRow());
    } else {
      let gameRow = GameRow(col, joueur)
      Grid.appendChild(gameRow);
    }
  }

  return Grid;
}

export default Grid;
