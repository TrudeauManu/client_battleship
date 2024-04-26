
function NameTag(joueur1, joueur2, scoreJoueur1, scoreJoueur2) {
    let nameTag = document.createElement("div");
    let nomJoueur1 = document.createElement("div");
    let nomJoueur2 = document.createElement("div");
    let score = document.createElement("div");

    nameTag.appendChild(nomJoueur1);
    nameTag.appendChild(score);
    nameTag.appendChild(nomJoueur2);

    nameTag.classList.add("flex", "justify-around", "text-2xl", "my-2", "uppercase", "items-center", "font-bold");
    score.classList.add('text-center', "Text-2xl", "text-white", 'w-1/3');
    nomJoueur1.classList.add('text-center', "Text-2xl", "text-white", 'w-1/3');
    nomJoueur2.classList.add('text-center', "Text-2xl", "text-white", 'w-1/3');

    score.id = 'score'

    nomJoueur1.innerHTML = String(joueur1);
    nomJoueur2.innerHTML = String(joueur2);
    score.innerHTML = scoreJoueur1 + " - " + scoreJoueur2;

    return nameTag;
}

export default NameTag;
