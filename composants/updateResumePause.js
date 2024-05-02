export default function updateResumePause() {
    if (this.paused) {
        this.paused = false;
        this.button.textContent = 'Pause';
    } else {
        this.paused = true;
        this.button.textContent = 'Resumer';
    }
}