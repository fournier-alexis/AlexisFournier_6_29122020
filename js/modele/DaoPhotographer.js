import Photographer from "../metier/Photographer.js";
import Controller from "../controllers/Controller.js";

/**Class data access object photographer */
export default class DaoPhotographer {
    /**
     * Singleton to create or get DaoPhotographer
     * @returns {DaoPhotographer}
     */
    constructor() {
        if (DaoPhotographer._instance) {
            return DaoPhotographer._instance;
        }
        DaoPhotographer._instance = this;
    }

    /**
     * Load all photographers and save them in sessionStorage
     * @param data {Object}
     */
    loadPhotographes(data) {
        const listPhotographer = [];
        data.forEach(p => {
            listPhotographer.push(
                new Photographer(p.name, p.id, p.city, p.country, p.tags, p.tagline, p.price, p.portrait)
            );
            Controller.addTags(p.tags);
        });
        sessionStorage.setItem("listPhotographer", JSON.stringify(listPhotographer));
    }
}