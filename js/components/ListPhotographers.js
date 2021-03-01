import ThumbPhotographer from "./ThumbPhotographer.js";
import "./../../css/components/listPhotographer.css";

/**Component representing a list of photographer */
export default class ListPhotographers{
    /**
     * Create a list of photographer
     * @param photographers {Photographer[]}
     */
    constructor(photographers){
        this._photographers = photographers;
    }

    /**
     * Create and return element in a div
     * @param filtre {string} a filter to sort photographer by tag
     * @returns {HTMLDivElement}
     */
    createElement(filtre){
        const nbPhotographers = this._photographers.length;
        const listPhotographer = document.createElement("div");
        const ligneElement = document.createElement("div");

        ligneElement.className = "lignePhotographer";

        const lignePhotographer = [];
        let compteur = 0;
        let j = 0;

        for (let i = 0; i < nbPhotographers / 3 ; i++){
            lignePhotographer.push(ligneElement.cloneNode());
        }

        this._photographers.forEach(value => {
            if (!filtre || value.tags.includes(filtre)){
                if (j === 3){
                    j = 0;
                    compteur ++;
                }
                lignePhotographer[compteur].appendChild(new ThumbPhotographer(value).createElement());
                j++;
            }
        });

        lignePhotographer.forEach(value => {
            listPhotographer.appendChild(value);
        })

        listPhotographer.className = "listPhotographer";
        listPhotographer.style.height = (nbPhotographers / 3) * 400 + "px";

        return listPhotographer;
    }
}