import "./../../../css/components/medias/image.css";

export default class Image{
    constructor(photographerName, media) {
        this._name = photographerName;
        this._media = media;
    }

    /**
     *
     * @returns {HTMLImageElement}
     */
    createElement(){
        const image = document.createElement('img');
        image.src = "../src/photographers/" + this._name + "/content/" + this._media.image;
        image.alt = this._media.description;
        image.className = "image";
        return image;
    }
}