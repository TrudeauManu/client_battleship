import axios from "axios";

/**
 * Contient les informations et les fonctions d'un Joueur.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 */
export default class Joueur {
    /**
     * Constructeur.
     *
     * @param nom Le nom du joueur.
     * @param token Le token du joueur.
     * @param url L'url de l'api du joueur.
     */
    constructor(nom, token, url) {
        this.nom = nom;
        this.token = token;
        this.url = url;

        this.createInstance();
    }

    /**
     * Fonction pour créer l'instance axios et mettre des paramètres par défauts.
     */
    createInstance() {
        this.instance = axios.create({
            baseURL: this.url,
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
    }

    /**
     * Fonction qui appelle la méthode POST /battleship-ia/parties/
     * pour créer une nouvelle partie et recevoir les positions de ces bateaux.
     *
     * @param adversaire Le nom de l'adversaire.
     * @returns {Promise<void>} La promesse de la création de la partie.
     */
    async creerBateaux(adversaire) {
        const config = {
            params: {
                adversaire: adversaire,
            },
        };

        const response = await this.instance.post("parties", null, config);
        this.partieId = response.data.data.id;
        this.bateaux = response.data.data.bateaux;
    }

    /**
     * Fonction qui tire un missile en appellant la méthode POST /parties/{partieId}/missiles de l'api.
     *
     * @returns {Promise<*>} Le missile créer.
     */
    async shoot() {
        const response = await this.instance.post(`parties/${this.partieId}/missiles`);
        return response.data.data.coordonnee;
    }

    /**
     * Fonction qui update le résultat d'un missile lancer en appelant la méthode PUT /parties/{partieId}/missiles/{coordonnees}.
     *
     * @param coordonnee Les coordonnees du missiles à updater.
     * @param resultat Le résultat du missile.
     * @returns {Promise<*>} Le missile modifié.
     */
    async updateMissile(coordonnee, resultat) {
        const config = {
            params: {
                resultat: resultat,
            },
        };

        const response = await this.instance.put(`parties/${this.partieId}/missiles/${coordonnee}`,null, config);
        return response.data.data;
    }

    /**
     * Méthode qui vérifie les hits de l'adversaire sur les bateaux.
     *
     * @param coordonnee Les coordonnees du missile.
     * @returns {number} Le resultat du missile.
     */
    checkHit(coordonnee) {
        for (let bateau in this.bateaux) {
            let index = this.bateaux[bateau].indexOf(coordonnee);
            if (index !== -1) {
                this.bateaux[bateau].splice(index, 1);
                if (this.bateaux[bateau].length === 0) {
                    delete this.bateaux[bateau];
                    switch (bateau) {
                        case "porte-avions":
                            return 2;
                        case "cuirasse":
                            return 3;
                        case "destroyer":
                            return 4;
                        case "sous-marin":
                            return 5;
                        case "patrouilleur":
                            return 6;
                    }
                }
                return 1;
            }
        }
        return 0;
    }

    /**
     * Fonction qui vérifie si le joueur a perdu.
     *
     * @returns {boolean} True si il a perdu et False si il n'a pas perdu.
     */
    aPerdu() {
        for (let bateau in this.bateaux) {
            if (this.bateaux[bateau].length !== 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Fonction qui retourne le nom du joueur.
     *
     * @returns {String}
     */
    getNom() {
        return this.nom;
    }

    /**
     * Fonction qui retourne les bateaux du joueur.
     *
     * @returns {*}
     */
    getBateaux() {
        return this.bateaux;
    }


    /**
     * Fonction qui delete la partie.
     *
     * @returns {Promise<void>}
     */
    async delete() {
        await this.instance.delete(`parties/${this.partieId}`);
    }
}
