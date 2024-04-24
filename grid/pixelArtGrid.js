import pixel from './pixelj.js';

function grid(){
    const grid = document.createElement('div');
    grid.className = 'canvas flex flex-col';
    for(let i = 1; i <= 10; i++) {
        const row = document.createElement('div');
        row.className = 'flex';
        for(let j = 1; j <= 10; j++) {
            row.appendChild(pixel());
        }
        grid.appendChild(row);
    }
    return grid;
}

export default grid;
