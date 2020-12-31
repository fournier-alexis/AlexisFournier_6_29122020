import Tag from "./Tag.js";

export default class ThumbPhotographer {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createElement() {
        //Création des éléments
        const divPhotographer = document.createElement('div');
        const aLink = this.createLink();
        const text = this.createText();
        const tags = this.createTags();

        //Ajout des élements dans le div
        divPhotographer.className = "thumbPhotographer";
        divPhotographer.appendChild(aLink);
        divPhotographer.appendChild(text);
        divPhotographer.appendChild(tags);

        return divPhotographer;
    }

    createLink() {
        const aLink = document.createElement('a');
        const portrait = document.createElement('img');
        const name = document.createElement('h2');
        portrait.src = "./src/photographers/" + this._photographer.name + "/" + this._photographer.portrait;
        portrait.alt = this._photographer.portrait;
        name.textContent = this._photographer.name;
        aLink.href = "#";
        aLink.appendChild(portrait);
        aLink.appendChild(name);
        return aLink;
    }

    createText() {
        const divText = document.createElement('div');
        const location = document.createElement('p');
        const tagline = document.createElement('p');
        const price = document.createElement('p');
        location.textContent = this._photographer.city + ', ' + this._photographer.country;
        location.className = "location";
        tagline.textContent = this._photographer.tagline;
        tagline.className = "tagline";
        price.textContent = this._photographer.price + "€/jour - Prix par impression : xx€";
        price.className = "price";
        divText.appendChild(location);
        divText.appendChild(tagline);
        divText.appendChild(price);
        return divText;
    }

    createTags(){
        const divTags = document.createElement('div');
        divTags.className = "tags";
        this._photographer.tags.forEach(value => {
            divTags.appendChild(new Tag(value).createElement());
        });
        return divTags;
    }
}