/**
 * Fonction qui crée le button quitter.
 *
 * @returns {HTMLButtonElement} Le bouton.
 */
function BoutonQuitter() {
    const boutonQuitter = document.createElement("button");
    boutonQuitter.className = "font-bold text-white bg-red-600 w-100 h-12 my-12";
    boutonQuitter.addEventListener("click", (e) => {
        location.reload();
    });
    boutonQuitter.textContent = "Quitter";

    return boutonQuitter
}

export default BoutonQuitter
