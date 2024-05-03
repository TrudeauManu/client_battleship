/**
 * Fonction qui crée une row.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @param col Le numéro de la row.
 * @param id Le id de la row.
 * @returns {HTMLDivElement} La row.
 */
function GameRow(col, id) {
  const GameRow = document.createElement('div')
  GameRow.className = 'flex '

  for (let row = 0; row < 11; row++) {
    let carre = document.createElement('div');
    let text = document.createElement('div');
    carre.className = "pixel flex justify-center items-center";

    if (row === 0) {
      text.innerHTML = String.fromCharCode(64 + col);
      carre.className += " font-bold"
      carre.appendChild(text)
    } else {
      carre.id = id + "-" + String.fromCharCode(64 + col) + "-" + row
    }

    GameRow.appendChild(carre);
  }

  return GameRow;
}

export default GameRow;
