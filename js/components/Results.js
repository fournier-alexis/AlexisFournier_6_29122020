import "./../../css/components/results.css";
import Controller from "../controllers/Controller";

/**Component representing results of a photographer */
export default class Results{
    /**
     * Create a results
     * @param photographer {Photographer}
     */
    constructor(photographer){
        this._photographer = photographer;
    }

    /**
     * Create and return element in a div
     * @returns {HTMLDivElement}
     */
    createElement(){
        const divResults = document.createElement('div');
        divResults.className = "results";

        const likes = document.createElement('p');
        likes.className = "totalLikes";
        likes.textContent = Controller.getPhotographerLikes(this._photographer.id);

        const dailyPrice = document.createElement('p');
        dailyPrice.className = "dailyPrice";
        dailyPrice.textContent = this._photographer.price + "€/jour";

        divResults.appendChild(likes);
        divResults.appendChild(dailyPrice);

        return divResults;
    }
}