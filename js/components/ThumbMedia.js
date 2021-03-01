import Image from "./medias/Image";
import "./../../css/components/thumbMedias.css";
import Video from "./medias/Video";
import Title from "./medias/Title";
import Statistics from "./medias/Statistics";

/**
 * Component representing a thumb media
 */
export default class ThumbMedia{
    /**
     * Create thumbMedia
     * @param photographerName {string}
     * @param media {Media}
     */
    constructor(photographerName, media) {
        this._name = photographerName;
        this._media = media;
    }

    /**
     * Create and return element in a div
     * @returns {HTMLDivElement}
     */
    createElement() {
        const media = document.createElement('div');
        media.className = "media";

        if (this._media.image){
            media.dataset.mediaPath = this._media.image;
            media.appendChild(new Image(this._name, this._media).createElement());
        }
        else if(this._media.video){
            media.dataset.mediaPath = this._media.video;
            media.appendChild(new Video(this._name, this._media).createElement());
        }

        media.appendChild(this.createDescription());

        return media;
    }

    /**
     * Create and return Media description
     * @returns {HTMLElement}
     */
    createDescription(){
        const description = document.createElement('div');
        description.className = "description";

        const title = new Title(this._media.description).createElement();
        const statistics = new Statistics(this._media.price, this._media.likes.toString()).createElement();

        description.appendChild(title);
        description.appendChild(statistics);

        return description;
    }
}