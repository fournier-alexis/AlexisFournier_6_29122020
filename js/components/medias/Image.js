import "./../../../css/components/medias/image.css";

/**Component representing a Media's image */
export default class Image{
    /**
     * Create a Media's image
     * @param photographerName {string}
     * @param media {Media} the media tu display
     */
    constructor(photographerName, media) {
        this._name = photographerName;
        this._media = media;
    }

    /**
     * Create and return the element
     * @returns {HTMLImageElement}
     */
    createElement(){
        const image = document.createElement('img');
        const labelBy = this._media.description.toLowerCase().replaceAll(" ", "-");

        image.src = "../src/photographers/" + this._name + "/Content/" + this._media.image;
        image.alt = this._media.description;
        image.className = "image";
        image.tabIndex = 1;
        image.setAttribute("role", "button");
        image.setAttribute("aria-labelledby",labelBy + "-label");

        return image;
    }
}