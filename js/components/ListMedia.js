import "./../../css/components/listMedias.css";
import Controller from "../controllers/Controller";
import ThumbMedia from "./ThumbMedia";

/**Component representing a list of media */
export default class ListMedia {
    /**
     * Create a list of media
     * @param photographersId {number}
     * @param photographersName {string}
     */
    constructor(photographersId, photographersName) {
        this._photographersId = photographersId;
        this._photographersName = photographersName;
    }

    /**
     * Create and return element in a div
     * @returns {HTMLDivElement}
     */
    createElement() {
        const medias = Controller.getMediaByPhotographerId(this._photographersId);
        const nbMedias = medias.length;
        const listMedias = document.createElement("div");

        const ligneElement = document.createElement("div");
        ligneElement.className = "ligneMedias";

        let ligneMedias = [];
        let compteur = 0;
        let j = 0;

        for (let i = 0; i < nbMedias / 3; i++) {
            ligneMedias.push(ligneElement.cloneNode());
        }

        medias.forEach(value => {
            if (j === 3) {
                j = 0;
                compteur++;
            }
            ligneMedias[compteur].appendChild(new ThumbMedia(this._photographersName, value).createElement());
            j++;
        });

        ligneMedias.forEach(value => {
            listMedias.appendChild(value);
        })
        listMedias.className = "listMedias";

        const currentWidth = document.getElementById("photographer").clientWidth;

        if (currentWidth > 1100){
            listMedias.style.height = (nbMedias / 3) * 500 + "px";
        } else {
            listMedias.style.height = nbMedias * 385 + "px";
        }

        return listMedias;
    }
}