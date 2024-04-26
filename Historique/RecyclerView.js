export default class RecyclerView {
    historique = [];

    createLog(coup) {
        const log = document.createElement('div');
        log.classList.add('log');
        log.textContent = coup;
        this.historique.push(log);
        return log;
    }

    updateRecyclerView(coup) {
        const recyclerView = document.getElementById('recycler-view');
        recyclerView.innerHTML = '';
        this.createLog(coup)

        this.historique.forEach(log => {
            recyclerView.appendChild(log);
        });

        recyclerView.scrollTop = recyclerView.scrollHeight;
    }
}

