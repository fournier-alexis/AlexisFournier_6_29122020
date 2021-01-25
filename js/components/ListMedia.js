import "./../../css/components/listMedias.css";
import Controller from "../controllers/Controller";
import ThumbMedia from "./ThumbMedia";

export default class ListMedia {
    constructor(photographersId, photographersName) {
        this._photographersId = photographersId;
        this._photographersName = photographersName;
    }

    createElement() {
        const medias = Controller.getMediaByPhotographerId(this._photographersId, this._photographersName);
        console.log(medias);
        const nbMedias = medias.length;
        const listMedias = document.createElement("medias");
        const ligneElement = document.createElement("medias");
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
        listMedias.style.height = (nbMedias / 3) * 400 + "px";
        return listMedias;
    }
}