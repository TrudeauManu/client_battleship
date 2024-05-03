/**
 * Fonction qui crée le button quitter.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @returns {HTMLButtonElement} Le bouton.
 */
function BoutonQuitter() {
    const boutonQuitter = document.createElement("button");
    boutonQuitter.className = "font-bold text-white bg-red-600 w-100 h-12 mt-2 hover:bg-red-700";
    boutonQuitter.addEventListener("click", (e) => {
        location.reload();
    });
    boutonQuitter.textContent = "Quitter";

    return boutonQuitter
}

export default BoutonQuitter
