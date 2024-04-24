function colorPicker(){
    const divColorPicker = document.createElement('div');
    const colors = ['black', 'white', 'red', 'lime', 'blue', 'yellow', 'cyan', '#99600B']
    let prevBtn = null;
    
    colors.forEach(color => {
        const button = document.createElement('button');
        button.style = `background-color : ${color}`;
        button.className = 'pickableColor';
        button.id = color;
        button.onclick = () => {
            button.className = 'pickableColor selected';
            if (prevBtn !== null){
                prevBtn.className = 'pickableColor';
            }
            prevBtn = button;
        }
        divColorPicker.appendChild(button);
    })
    return divColorPicker;
}

export default colorPicker();