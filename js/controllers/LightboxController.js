import Controller from "./Controller";

export default class LightboxController {

    constructor(photographer) {
        this._photographer = photographer;

        this.registerListeners();
        LightboxController._instance = this;
    }

    registerListeners() {
        document.getElementById("left").addEventListener("click", this.switchMediaTo.bind(this, "left"));
        document.getElementById("right").addEventListener("click", this.switchMediaTo.bind(this, "right"));
        document.getElementById("close").addEventListener("click", this.closeLightbox.bind(this));
    }

    removeListeners() {
        document.getElementById("left").removeEventListener("click", this.switchMediaTo);
        document.getElementById("right").removeEventListener("click", this.switchMediaTo);
        document.getElementById("close").removeEventListener("click", this.closeLightbox);
    }

    /**
     * Ouvre la lightbox à partir du media choisi
     * @param media
     * @return void
     */
    openLightbox(media) {
        const lightbox = document.getElementById("lightbox");
        const mediaType = (media.dataset.mediaPath.includes(".mp4") ? "video" : "image");

        lightbox.style.display = "block";
        Controller.setBackgroundOpacity("0");
        this.changeLightboxMedia(media.dataset.mediaPath, mediaType);
    }

    /**
     * Ferme la lightbox
     * @return void
     */
    closeLightbox() {
        const lightbox = document.getElementById("lightbox");
        Controller.setBackgroundOpacity("100");
        lightbox.style.display = "none";
        this.removeListeners();
    }

    /**
     * Récupère le prochain média à afficher
     * @param direction : string
     */
    switchMediaTo(direction) {
        const media = document.getElementById("lightbox").dataset.media;
        const index = Controller.getIndexOfMedia(this._photographer.id, media);
        let nextMedia = undefined;

        if (direction === "right") {
            nextMedia = Controller.getMediaOfIndex(this._photographer.id, (index + 1));
        } else if (direction === "left") {
            nextMedia = Controller.getMediaOfIndex(this._photographer.id, (index - 1));
        }
        if (nextMedia && nextMedia.image) {
            this.changeLightboxMedia(nextMedia.image, "image")
        } else if (nextMedia) {
            this.changeLightboxMedia(nextMedia.video, "video")
        }
    }

    /**
     * Change le media de la lightbox
     * @param media : string => le nom du média
     * @param type : "image"|"video"
     * @return void
     */
    changeLightboxMedia(media, type) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightbox-image");
        const lightboxVideo = document.getElementById("lightbox-video");
        const lightboxSource = document.getElementById("lightbox-source");
        lightbox.dataset.media = media;

        if (type === "image") {
            lightboxImage.style.display = "block";
            lightboxImage.src = "../src/photographers/" + this._photographer.name + "/Content/" + media;
            lightboxImage.alt = media;
            lightboxVideo.style.display = "none";
        } else if (type === "video") {
            lightboxVideo.style.display = "block";
            lightboxSource.src = "../src/photographers/" + this._photographer.name + "/Content/" + media;
            lightboxImage.style.display = "none";
            lightboxVideo.load();
        }
        this.displayMediaTitle(media);
        //On attend être sûr que l'élément est chargé et retournera la bonne clientHeight
        setTimeout(() => {
            this.displayArrows(media)
        }, 200);
    }

    /**
     * Affiche le titre du media
     * @param path : string
     */
    displayMediaTitle(path) {
        const lightboxTitle = document.getElementById("lightbox-title");
        const media = Controller.getMediaByPath(this._photographer.id, path);
        lightboxTitle.textContent = media.description;
    }

    /**
     * Définit la position des flèches
     * Définit si on affiche ou non les flèches
     * @param media : string
     * @return void
     */
    displayArrows(media) {
        const index = Controller.getIndexOfMedia(this._photographer.id, media);
        const lightboxMedia = document.getElementById("lightbox-media");
        const rightNavButton = document.getElementById("right-nav-button");
        const leftNavButton = document.getElementById("left-nav-button");
        const isAMediaOnLeft = Controller.getMediaOfIndex(this._photographer.id, (index - 1));
        const isAMediaOnRight = Controller.getMediaOfIndex(this._photographer.id, (index + 1));

        rightNavButton.style.height = (lightboxMedia.clientHeight / 2) + 39 + "px";
        leftNavButton.style.top = (lightboxMedia.clientHeight / 2) + "px";
        document.getElementById("left").style.visibility = (isAMediaOnLeft) ? "visible" : "hidden";
        document.getElementById("right").style.visibility = (isAMediaOnRight) ? "visible" : "hidden";
    }
}