import Controller from "./Controller";
import ListMedia from "../components/ListMedia";
import LightboxController from "./LightboxController";
import ContactController from "./ContactController";
import MobileController from "./MobileController";

/**
 * Reprensent the controller for photographers pages
 */
export default class PhotographerController {

    /**
     * @param photographer
     * @return {void}
     */
    constructor(photographer) {
        this._photographer = photographer;
        this.registerListeners(false);
    }

    /**
     * Enregistre les évènements de la page
     * @return void
     */
    registerListeners(bypass) {
        document.querySelectorAll(".media").forEach((media) => {
            media.addEventListener("click", (e) => {
                this.openLightbox(e, media);
            });
            media.addEventListener("keydown", (e) => {
                this.openLightbox(e, media);
            });
        });
        if (!bypass) {
            document.getElementById("logo").addEventListener("click", this.goToMainPage);
            document.getElementById("logo").addEventListener("keydown", this.goToMainPage)
            document.getElementById("sort").addEventListener(
                "change", (event) => {
                    this.sortMedias(event);
                });
            document.querySelectorAll(".contact").forEach((contact) => {
                contact.addEventListener("click", (_) => {
                    this.openModal();
                });
            });
            document.addEventListener(
                "keydown",
                (e) => {
                    this.onKeyDown(e)
                }
            )
        }
    }

    /**
     * Go to index.html
     * @param event
     * @return {void}
     */
    goToMainPage(event) {
        if (Controller.isValidInput(event)) {
            window.location = "../index.html";
        }
    }

    /**
     * Sort medias in case of the filter
     * @param e
     * return {void}
     */
    sortMedias(e) {
        localStorage.setItem("currentFilter", e.target.value);
        const main = document.getElementById("main");
        document.querySelectorAll(".listMedias").forEach((list) => {
            main.removeChild(list);
            main.appendChild(new ListMedia(this._photographer.id, this._photographer.name).createElement())
        });
        this.registerListeners(true);
    }

    /**
     * Open the lightbox
     * @param event
     * @param media
     * @return void
     */
    openLightbox(event, media) {
        if (Controller.isValidInput(event)) {
            new LightboxController(this._photographer).openLightbox(media);
            new MobileController(this._photographer);
        }
    }

    /**
     * Open the contact modal
     * @return {void}
     */
    openModal() {
        new ContactController().openModal();
    }

    /**
     * control the lightbox with keys
     * @param event
     * @return {void}
     */
    onKeyDown(event) {
        if (document.getElementById("lightbox").style.display === "block") {
            const lightboxController = new LightboxController(this._photographer);
            switch (event.key) {
                case "ArrowLeft":
                    lightboxController.switchMediaTo("left");
                    break;
                case "ArrowRight":
                    lightboxController.switchMediaTo("right");
                    break;
                case "Escape":
                    lightboxController.closeLightbox();
                    break;
            }
        } else if (event.key === "Escape" && document.getElementById("contact-modal").style.display === "block") {
            new ContactController().closeModal();
        }
    }
}