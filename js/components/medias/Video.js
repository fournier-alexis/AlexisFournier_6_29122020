import "./../../../css/components/medias/video.css";

/**Component representing a Media's video */
export default class Video{
    /**
     * Create a Media's video
     * @param photographerName {string}
     * @param media {Media} the media tu display
     */
    constructor(photographerName, media) {
        this._name = photographerName;
        this._media = media;
    }

    /**
     * Create and return the element
     * @returns {HTMLVideoElement}
     */
    createElement(){
        const video = document.createElement('video');
        const source = document.createElement('source');
        const labelBy = this._media.description.toLowerCase().replaceAll(" ", "-");

        source.type = "video/mp4";
        source.src = "../src/photographers/" + this._name + "/Content/" + this._media.video;
        video.className = "video";
        video.controls = true;
        video.tabIndex = 1;
        video.setAttribute("role", "button");
        video.setAttribute("aria-labelledby",labelBy + "-label");
        video.appendChild(source);

        return video;
    }
}