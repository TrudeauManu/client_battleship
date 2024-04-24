function pixel() {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', () => {
        let selectedColor = document.getElementsByClassName('selected');
        pixel.style = `background-color : ${selectedColor[0].id}`;
    });
    return pixel;
}

export default pixel;
