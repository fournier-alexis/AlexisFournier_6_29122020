import Controller from "./Controller";

export default class ContactController {

    constructor() {
        this.enum_errors = {
            "errorName": "/!\\ Veuillez saisir un nom valide",
            "errorLastname": "/!\\ Veuillez saisir un prénom valide",
            "errorEmail": "/!\\ Veuillez saisir un email valide",
            "errorMessage": "/!\\ Veuillez saisir un message valide",
        }
        this.errors = {
            "errorName": true,
            "errorLastname": true,
            "errorEmail": true,
            "errorMessage": true
        }

        this.registerListeners();
    }

    /**
     * Enregistre les évènements de la modale
     * @return void
     */
    registerListeners() {
        document.getElementById("name").addEventListener("change", this.checkEmpty.bind(this, "errorName"));
        document.getElementById("lastname").addEventListener("change", this.checkEmpty.bind(this, "errorLastname"));
        document.getElementById("email").addEventListener("change", this.checkMail.bind(this));
        document.getElementById("message").addEventListener("change", this.checkEmpty.bind(this, "errorMessage"));
        document.getElementById("button").addEventListener("click", this.sendMessage.bind(this));
        document.getElementById("contact-close").addEventListener("click", this.closeModal.bind(this));
        document.getElementById("form").addEventListener("submit", (e) => {
            e.preventDefault()
        });
    }

    removeListeners() {
        document.getElementById("name").removeEventListener("change", this.checkEmpty);
        document.getElementById("lastname").removeEventListener("change", this.checkEmpty);
        document.getElementById("email").removeEventListener("change", this.checkMail);
        document.getElementById("message").removeEventListener("change", this.checkEmpty);
        document.getElementById("button").removeEventListener("click", this.sendMessage);
        document.getElementById("contact-close").removeEventListener("click", this.closeModal);
        document.getElementById("form").removeEventListener("submit", () => {
        });
    }

    /**
     * Ouvre la modale de contact
     */
    openModal() {
        const modal = document.getElementById("contact-modal");
        modal.style.display = "block";
        Controller.setBackgroundOpacity("0");
    }

    /**
     * Ferme la modal
     * @return void
     */
    closeModal() {
        const modal = document.getElementById("contact-modal");
        Controller.setBackgroundOpacity("100");
        modal.style.display = "none";
        this.removeListeners();
    }

    /**
     * Vérifie si le champs est vide
     * @param error {string}
     * @param event
     */
    checkEmpty(error, event) {
        this.errors[error] = event.target.value.length <= 0;

        if (this.errors[error]) {
            this.displayError(error, true);
        } else {
            this.displayError(error, false);
        }
    }

    /**
     * Vérifie si le mail est valide
     * @param event
     */
    checkMail(event) {
        this.errors["errorEmail"] = !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value);
        if (this.errors["errorEmail"]) {
            this.displayError("errorEmail", true);
        } else {
            this.displayError("errorEmail", false);
        }
    }

    /**
     * Affiche et supprime les messages d'erreurs
     * @param error {string}
     * @param isVisible {boolean}
     */
    displayError(error, isVisible) {
        if (isVisible) {
            document.getElementById(error).textContent = this.enum_errors[error];
        } else {
            document.getElementById(error).textContent = "";
        }
    }

    /**
     * Envoie le message
     */
    sendMessage() {
        let formIsValid = true;
        Object.keys(this.errors).map((error) => {
            if (this.errors[error]) {
                formIsValid = false;
                this.displayError(error, true);
            }
        })
        if (formIsValid) {
            location.reload();
        }
    }
}