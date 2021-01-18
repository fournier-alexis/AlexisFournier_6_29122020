import Media from "../metier/Media.js";
import Controller from "../controllers/Controller.js";

export default class DaoMedia {
    constructor() {
        if (DaoMedia._instance) {
            return DaoMedia._instance;
        }
        DaoMedia._instance = this;
    }

    loadMedia(data) {
        data.forEach(m => {
            Controller.listMedia.push(new Media(m.id, m.photographerID, m.image, m.tags, m.likes, m.description));
        });
    }
}