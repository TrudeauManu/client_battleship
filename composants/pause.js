import updateResumePause from "./updateResumePause";

export default function boutonPause() {
    this.paused = false;
    this.button = document.createElement("button");
    this.button.className = "mt-4 px-4 py-2 bg-orange-600 text-white text-xl font-bold rounded-xl hover:bg-red-700 uppercase";
    this.button.onclick = () => { updateResumePause(); };

    updateResumePause();
}
