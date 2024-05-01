/**
 * Fonction qui mets les valeurs sauvegarder dans le localstorage dans le formulaire avec un event listener sur le load de la window.
 */
export function addLoadListenerSurWindow() {
    window.addEventListener('load', function() {
        document.getElementById('joueur1Nom').value = localStorage.getItem('joueur1Nom') || '';
        document.getElementById('joueur1Url').value = localStorage.getItem('joueur1Url') || '';
        document.getElementById('joueur1Token').value = localStorage.getItem('joueur1Token') || '';

        document.getElementById('joueur2Nom').value = localStorage.getItem('joueur2Nom') || '';
        document.getElementById('joueur2Url').value = localStorage.getItem('joueur2Url') || '';
        document.getElementById('joueur2Token').value = localStorage.getItem('joueur2Token') || '';
    });
}
