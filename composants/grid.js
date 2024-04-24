import NumberRow from "./numberRow.js";
import GameRow from "./gameRow.js";

function Grid() {
  const Grid = document.createElement('div')
  Grid.className = "flex flex-col m-2"

  for (let col = 0; col < 11; col++) {
    if (col === 0 ) {
      Grid.appendChild(NumberRow());
    } else {
      Grid.appendChild(GameRow(col));
    }
  }

  return Grid;
}

export default Grid;