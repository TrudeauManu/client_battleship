/**
 * Classe d'Historique.
 */
export default class Historique {
    historique = [];

    /**
     * Fonction pour créer un log et le mettre dans l'historique.
     *
     * @param coup Le coup joué.
     * @returns {HTMLDivElement} Une div contenant le coup.
     */
    createLog(coup) {
        const log = document.createElement('div');
        log.classList.add('log');
        log.textContent = coup;
        this.historique.push(log);
        return log;
    }

    /**
     * Fonction qui update l'historique.
     *
     * @param coup Le coup à ajouter.
     */
    update(coup) {
        const recyclerView = document.getElementById('recycler-view');
        recyclerView.innerHTML = '';
        this.createLog(coup)

        this.historique.forEach(log => {
            recyclerView.appendChild(log);
        });

        recyclerView.scrollTop = recyclerView.scrollHeight;
    }
}

