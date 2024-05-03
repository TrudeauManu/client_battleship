/**
 * Fonction qui sauvegarde les valeurs du formulaire en localStorage.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 */
export function sauvegarderValeursFormulaire() {
    localStorage.setItem('joueur1Nom', document.getElementById('joueur1Nom').value);
    localStorage.setItem('joueur1Url', document.getElementById('joueur1Url').value);
    localStorage.setItem('joueur1Token', document.getElementById('joueur1Token').value);

    localStorage.setItem('joueur2Nom', document.getElementById('joueur2Nom').value);
    localStorage.setItem('joueur2Url', document.getElementById('joueur2Url').value);
    localStorage.setItem('joueur2Token', document.getElementById('joueur2Token').value);
}
