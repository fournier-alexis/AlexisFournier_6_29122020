import Name from "./profile/Name";
import Location from "./profile/Location";
import Tags from "./Tags";
import Avatar from "./profile/Avatar";
import "./../../css/components/thumbPhotographer.css";

/**Component representing a thumb photographer */
export default class ThumbPhotographer {
    /**
     * Create thumb photographer
     * @param photographer {Photographer}
     */
    constructor(photographer) {
        this._photographer = photographer;
    }

    /**
     * Create and return element in a div
     * @returns {HTMLDivElement}
     */
    createElement() {
        const divPhotographer = document.createElement('div');
        const aLink = this.createLink();
        const text = this.createText();

        divPhotographer.className = "thumbPhotographer";
        divPhotographer.dataset.name = this._photographer.name;
        divPhotographer.tabIndex = 1;
        divPhotographer.setAttribute("role", "button");

        divPhotographer.appendChild(aLink);
        divPhotographer.appendChild(text);
        divPhotographer.appendChild(new Tags(this._photographer.tags).createElement());

        return divPhotographer;
    }

    /**
     * Create and return photographer link
     * @returns {HTMLDivElement}
     */
    createLink() {
        const div = document.createElement('div');
        const avatar = new Avatar(this._photographer.name, this._photographer.portrait).createElement(".", "2x");
        const name = new Name(this._photographer.name).createElement("h2");

        div.appendChild(avatar);
        div.appendChild(name);

        return div;
    }

    /**
     * Create and return photographer description
     * @returns {HTMLDivElement}
     */
    createText() {
        const divText = document.createElement('div');
        const tagline = document.createElement('p');
        const price = document.createElement('p');

        tagline.textContent = this._photographer.tagline;
        tagline.className = "tagline";
        price.textContent = this._photographer.price + "€/jour";
        price.className = "price";

        divText.appendChild(new Location(this._photographer.city, this._photographer.country).createElement());
        divText.appendChild(tagline);
        divText.appendChild(price);

        return divText;
    }
}