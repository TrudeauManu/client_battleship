export let paused = false;

/**
 * Fonction qui toggle le pause/resume.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 */
export const togglePause = () => {
    paused = !paused;
    const button = document.getElementById("pauseButton");
    button.textContent = paused ? 'Reprendre' : 'Pause';
    button.classList.remove("bg-orange-600", "bg-cyan-700");
    button.classList.add(paused ? "bg-orange-600" : "bg-cyan-700");
};
