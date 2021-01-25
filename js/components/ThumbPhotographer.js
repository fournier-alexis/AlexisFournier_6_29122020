import Name from "./profile/Name";
import Location from "./profile/Location";
import Tags from "./Tags";
import Avatar from "./profile/Avatar";
import "./../../css/components/thumbPhotographer.css";

export default class ThumbPhotographer {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createElement() {
        //Création des éléments
        const divPhotographer = document.createElement('photographer');
        const aLink = this.createLink();
        const text = this.createText();

        //Ajout des élements dans le div
        divPhotographer.className = "thumbPhotographer";
        divPhotographer.dataset.name = this._photographer.name;
        divPhotographer.appendChild(aLink);
        divPhotographer.appendChild(text);
        divPhotographer.appendChild(new Tags(this._photographer.tags).createElement());

        return divPhotographer;
    }

    createLink() {
        const div = document.createElement('div');
        const avatar = new Avatar(this._photographer.name, this._photographer.portrait).createElement(".", "2x");
        const name = new Name(this._photographer.name).createElement("h2");
        div.appendChild(avatar);
        div.appendChild(name);
        return div;
    }

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