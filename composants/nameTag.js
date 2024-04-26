
function NameTag(nom) {
    let nameTag = document.createElement("div");
    let nameTagInnerDiv = document.createElement("div");

    nameTag.appendChild(nameTagInnerDiv);
    nameTag.classList.add("flex", "justify-center", "text-2xl", "my-2", "uppercase", "items-center", "font-bold");

    nameTagInnerDiv.classList.add("Text-2xl", "text-white");
    nameTagInnerDiv.innerHTML = String(nom);

    return nameTag;
}

export default NameTag;
