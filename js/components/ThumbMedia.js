import Image from "./medias/Image";
import "./../../css/components/thumbMedias.css";
import Video from "./medias/Video";

export default class ThumbMedia{
    constructor(photographerName, media) {
        this._name = photographerName;
        this._media = media;
    }

    createElement() {
        //Création des éléments
        const media = document.createElement('media');
        media.className = "media";
        if (this._media.image){
            media.appendChild(new Image(this._name, this._media).createElement());
        }
        else if(this._media.video){
            media.appendChild(new Video(this._name, this._media).createElement());
        }
        media.appendChild(this.createText());
        return media;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    createDescription(){
        const description = document.createElement('description')
        
        return description;
    }
}