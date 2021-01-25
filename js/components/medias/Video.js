import "./../../../css/components/medias/video.css";

export default class Video{
    constructor(photographerName, media) {
        this._name = photographerName;
        this._media = media;
    }

    /**
     *
     * @returns {HTMLVideoElement}
     */
    createElement(){
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.type = "video/mp4";
        source.src = "../src/photographers/" + this._name + "/content/" + this._media.video;
        video.className = "video";
        video.controls = true;
        video.appendChild(source);
        return video;
    }
}