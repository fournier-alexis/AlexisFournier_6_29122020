import Photographer from "../metier/Photographer.js";
import Controller from "../controllers/Controller.js";

export default class DaoPhotographer {
    constructor() {
        if (DaoPhotographer._instance) {
            return DaoPhotographer._instance;
        }
        DaoPhotographer._instance = this;
    }

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