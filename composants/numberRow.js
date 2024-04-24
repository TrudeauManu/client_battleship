function NumberRow() {
  const NumberRow = document.createElement('div')
  NumberRow.className = 'flex'

  for (let row = 0; row < 11; row++) {
    let carre = document.createElement('div');
    let text = document.createElement('div');
    carre.className = "pixel text-center flex justify-center items-center border-2 border-black"

    if (row > 0) {
      text.innerHTML = row;
      carre.className += ""
      carre.appendChild(text)
    }

    NumberRow.appendChild(carre);
  }

  return NumberRow
}

export default NumberRow