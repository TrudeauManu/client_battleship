/**
 * Fonction qui crée une row qui contient des tuiles de jeu.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @param col Le numéro de la row.
 * @param nomJoueur Le nom du joueur à qui appartient la row.
 * @returns {HTMLDivElement} La row.
 */
function GameRow(col, nomJoueur) {
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
      carre.id = nomJoueur + "-" + String.fromCharCode(64 + col) + "-" + row
    }

    GameRow.appendChild(carre);
  }

  return GameRow;
}

export default GameRow;
