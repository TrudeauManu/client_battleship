import axios from "axios";

export default class Joueur {
    constructor(nom, token, url) {
        this.nom = nom;
        this.token = token;
        this.url = url;

        this.createInstance();
    }

    createInstance() {
        this.instance = axios.create({
            baseURL: this.url,
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
    }

    async createPartie(adversaire) {
        const config = {
            params: {
                adversaire: adversaire,
            },
        };

        const response = await this.instance.post("parties", null, config);
        this.partieId = response.data.data.id;
        this.bateaux = response.data.data.bateaux;
    }

    async shoot() {
        const response = await this.instance.post(`parties/${this.partieId}/missiles`);
        return response.data.data.coordonnee;
    }

    async updateMissile(coordonnee, resultat) {
        const config = {
            params: {
                resultat: resultat,
            },
        };

        const response = await this.instance.put(`parties/${this.partieId}/missiles/${coordonnee}`,null, config);
        return response.data.data;
    }

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
                        case "sous-marine":
                            return 5;
                        case "patrouilleur":
                            return 6;
                        default:
                            return -1;
                    }
                }
                return 1;
            }
        }
        return 0;
    }

    aPerdu() {
        for (let bateau in this.bateaux) {
            if (this.bateaux[bateau].length === 0) {
                return false;
            }
        }
        return true;
    }

    getNom() {
        return this.nom;
    }
}
