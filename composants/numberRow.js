function NumberRow() {
  const NumberRow = document.createElement('div')
  NumberRow.className = 'flex';
  NumberRow.className += " "

  for (let row = 0; row < 11; row++) {
    let carre = document.createElement('div');
    let text = document.createElement('div');
    carre.className = "pixel text-center flex justify-center items-center"

    if (row === 0) {
      carre.className = "coin border-none text-center flex justify-center items-center"
    }

    if (row > 0) {
      text.innerHTML = String(row);
      carre.className += " font-bold"
      carre.appendChild(text)
    }

    NumberRow.appendChild(carre);
  }

  return NumberRow
}

export default NumberRow