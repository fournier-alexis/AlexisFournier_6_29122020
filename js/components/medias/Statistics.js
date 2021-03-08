import "./../../../css/components/medias/statistics.css";

/**Component representing statistics of a Media */
export default class Statistics{
    /**
     * Create statistics
     * @param id {number}
     * @param price {number}
     * @param likes {string}
     */
    constructor(id, price, likes){
        this._id = id;
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

        const isLiked = sessionStorage.getItem(this._id.toString()) !== "null";
        const likes = document.createElement('p');
        likes.className = isLiked ? "likes liked" : "likes";
        likes.tabIndex = 1;
        likes.dataset.initial = this._likes;
        likes.dataset.id = this._id.toString();
        likes.textContent = isLiked ? parseInt(this._likes) + 1 : this._likes;

        statistics.appendChild(price);
        statistics.appendChild(likes);

        return statistics;
    }
}