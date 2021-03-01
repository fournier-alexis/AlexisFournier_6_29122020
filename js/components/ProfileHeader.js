import Name from "./profile/Name";
import Location from "./profile/Location";
import Tagline from "./profile/Tagline";
import Tags from "./Tags";
import Avatar from "./profile/Avatar";
import "./../../css/components/profileHeader.css";

/**Component representing profil header */
export default class ProfileHeader{
    /**
     * Create a profil header
     * @param photographer {Photographer}
     */
    constructor(photographer){
        this._photographer = photographer;
    }

    /**
     * Create and return element in a div
     * @return HTMLElement
     */
    createElement(){
        const profileElement = document.createElement('div');
        const presentation = document.createElement('div');

        presentation.appendChild(this.createText());
        presentation.appendChild(this.createButton());
        presentation.className = "presentation";

        profileElement.appendChild(presentation);
        profileElement.appendChild(new Avatar(this._photographer.name, this._photographer.portrait).createElement("..", "2x"));
        profileElement.className = "profile";

        return profileElement;
    }

    /**
     * Create and return texte header
     * @returns {HTMLParagraphElement}
     */
    createText(){
        const textElement = document.createElement('p');

        textElement.appendChild(new Name(this._photographer.name).createElement("h1"));
        textElement.appendChild(new Location(this._photographer.city, this._photographer.country).createElement());
        textElement.appendChild(new Tagline(this._photographer.tagline).createElement());
        textElement.appendChild(new Tags(this._photographer.tags).createElement());

        return textElement;
    }

    /**
     * Create and return contact button
     * @returns {HTMLButtonElement}
     */
    createButton(){
        const button = document.createElement('button');

        button.className = "contact";
        button.textContent = "Contactez-moi !";
        button.tabIndex = 1;
        button.setAttribute("accessKey", "2")

        return button;
    }
}