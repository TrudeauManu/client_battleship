import { togglePause } from "./togglePause";

/**
 * Fonction qui crée le button pause/resume.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @returns {HTMLButtonElement}
 */
export default function boutonPause() {
    const button = document.createElement("button");
    button.id = "pauseButton";
    button.className = "font-bold text-white bg-cyan-700 w-100 h-12 mt-3 hover:bg-red-600";
    button.textContent = "Pause";
    button.onclick = togglePause;

    return button;
}
