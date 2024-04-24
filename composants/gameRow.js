function GameRow(nbRow) {
  const GameRow = document.createElement('div')
  GameRow.className = 'flex'

  for (let row = 0; row < 11; row++) {
    let carre = document.createElement('div');
    let text = document.createElement('div');

    if (row % 2 === 0) {
      carre.className = "pixel flex justify-center items-center border-x-2 border-black ";
    } else if (row % 2 === 1) {
      carre.className = "pixel flex justify-center items-center border-y-2 border-black";
    }

    if (row === 0) {
      text.innerHTML = String.fromCharCode(64 + nbRow);
      carre.appendChild(text)
    } else {
      carre.id = String.fromCharCode(64 + nbRow) + "-" + row
    }

    GameRow.appendChild(carre);
  }

  return GameRow;
}

export default GameRow;