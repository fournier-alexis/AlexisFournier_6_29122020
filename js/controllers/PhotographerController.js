import Controller from "./Controller";
import ListMedia from "../components/ListMedia";
import LightboxController from "./LightboxController";
import ContactController from "./ContactController";
import MobileController from "./MobileController";

/**
 * Represent the controller for photographers pages
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
        this.updateTotalLikes();
        document.querySelectorAll(".media").forEach((media) => {
            media.addEventListener("click", (e) => {
                this.openLightbox(e, media);
            });
            media.addEventListener("keydown", (e) => {
                this.openLightbox(e, media);
            });
        });
        document.querySelectorAll(".likes").forEach((like) => {
            like.addEventListener("click", (event) => {
                this.addLike(event);
            });
            like.addEventListener("keydown", (event) => {
                this.addLike(event);
            });
        })
        if (!bypass) {
            document.getElementById("logo").addEventListener("click", this.goToMainPage);
            document.getElementById("logo").addEventListener("keydown", this.goToMainPage)
            document.getElementById("sort").addEventListener("click", this.openSort);
            document.getElementById("sort").addEventListener("keydown", this.openSort)
            document.querySelectorAll(".tag").forEach((tag) => {
                tag.addEventListener("click", (event) => {
                    this.selectTag(event);
                });
            })

            document.querySelectorAll(".sortBtn").forEach((tag) => {
                tag.addEventListener("click", (event) => {
                    this.sortMedias(event);
                });
            })

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

    openSort(event){
        if (Controller.isValidInput(event)) {
            document.getElementById("elements").style.display = "block";
            document.getElementById("sort").style.visibility = "hidden";
        }
    }

    /**
     * Go to main page with tag filter
     * @param event
     * @return {void}
     */
    selectTag(event){
        if (Controller.isValidInput(event)) {
            sessionStorage.setItem("selectedTag", event.target.firstChild.data.substring(1));
            window.location = "../index.html";
        }
    }

    /**
     * Sort medias in case of the filter
     * @param e
     * return {void}
     */
    sortMedias(e) {
        if (e.target.dataset.value !== localStorage.getItem("currentFilter")){
            localStorage.setItem("currentFilter", e.target.dataset.value);
            const main = document.getElementById("main");
            document.getElementById("sort").textContent = this.getSortName(e.target.dataset.value);
            document.querySelectorAll(".listMedias").forEach((list) => {
                main.removeChild(list);
                main.appendChild(new ListMedia(this._photographer.id, this._photographer.name).createElement())
            });
            this.registerListeners(true);
        }
        document.getElementById("elements").style.display = "none";
        document.getElementById("sort").style.visibility = "visible";
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

    addLike(event){
        if (Controller.isValidInput(event)){
            if (parseInt(event.target.dataset.initial) === parseInt(event.target.textContent)) {
                event.target.textContent = parseInt(event.target.textContent) + 1;
                event.target.className = "likes liked";
                sessionStorage.setItem(event.target.dataset.id, "");
            } else {
                event.target.textContent = parseInt(event.target.textContent) - 1;
                event.target.className = "likes";
                sessionStorage.setItem(event.target.dataset.id, "null");
            }
            this.updateTotalLikes();
        }
    }

    updateTotalLikes(){
        let totalLikes = 0;
        document.querySelectorAll(".likes").forEach((like) => {
            totalLikes += parseInt(like.textContent);
        })
        document.querySelectorAll(".totalLikes").forEach((total) => {
            total.textContent = totalLikes;
        })
    }

    getSortName(value){
        switch(value){
            case "popular":
                return "Popularité"
            case "date":
                return "Date"
            case "title":
                return "Titre"
        }
    }
}