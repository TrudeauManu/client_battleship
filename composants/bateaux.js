/**
 * Fonction qui crée la div contenant les images des états des bateaux.
 * @author Emmanuel Trudeau & Marc-Alexandre Bouchard
 *
 * @param nomJoueur Le nom du joueur à qui appartient les bateaux.
 * @returns {HTMLDivElement} La div contenant les images des états des bateaux.
 */
function Bateaux(nomJoueur) {
    let bateauxDiv = document.createElement("div");
    let firstCol = document.createElement("div");
    let secondCol = document.createElement("div");
    let thirdCol = document.createElement("div");

    bateauxDiv.classList.add('flex', 'flex-col')
    firstCol.classList.add('flex', 'flex-row', 'justify-between')
    secondCol.classList.add('flex', 'flex-row', 'justify-around')
    thirdCol.classList.add('flex', 'flex-row', 'justify-around')

    bateauxDiv.appendChild(firstCol);
    bateauxDiv.appendChild(secondCol);
    bateauxDiv.appendChild(thirdCol);

    let porteAvions = document.createElement("img");
    porteAvions.src = "../images/porte-avions-v2.webp";
    porteAvions.id = String(nomJoueur) + "-porte-avions";

    let cuirasse = document.createElement("img");
    cuirasse.src = "../images/cuirasse-v2.png";
    cuirasse.id = String(nomJoueur) + "-cuirasse";

    let sousMarin = document.createElement("img");
    sousMarin.src = "../images/sous-marin-v2.png";
    sousMarin.id = String(nomJoueur) + "-sous-marin";

    let destroyer = document.createElement("img");
    destroyer.src = "../images/destroyer-v2.png";
    destroyer.id = String(nomJoueur) + "-destroyer";

    let patrouilleur = document.createElement("img");
    patrouilleur.src = "../images/patrouilleur-v2.webp";
    patrouilleur.id = String(nomJoueur) + "-patrouilleur";

    firstCol.appendChild(porteAvions);
    firstCol.appendChild(cuirasse);
    secondCol.appendChild(sousMarin);
    secondCol.appendChild(destroyer);
    thirdCol.appendChild(patrouilleur);

    return bateauxDiv;
}

export default Bateaux;
