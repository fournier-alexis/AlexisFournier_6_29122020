import "./../../../css/components/medias/statistics.css";

/**Component representing statistics of a Media */
export default class Statistics{
    /**
     * Create statistics
     * @param price {number}
     * @param likes {string}
     */
    constructor(price, likes){
        this._price = price;
        this._likes = likes
    }

    /**
     * Create and return the element inside a div
     * @returns {HTMLElement}
     */
    createElement(){
        const statistics = document.createElement('div');
        statistics.className = "statistics";

        const price = document.createElement('p');
        price.className= "price";
        price.textContent = this._price + "€";

        const likes = document.createElement('p');
        likes.className = "likes";
        likes.textContent = this._likes;

        statistics.appendChild(price);
        statistics.appendChild(likes);

        return statistics;
    }
}