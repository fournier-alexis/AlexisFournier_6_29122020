import Media from "../metier/Media.js";

export default class DaoMedia {
    constructor() {
        if (DaoMedia._instance) {
            return DaoMedia._instance;
        }
        DaoMedia._instance = this;
    }

    loadMedia(data) {
        const listMedia = [];
        data.forEach(m => {
            listMedia.push(new Media(m.id, m.photographerId, m.image, m.video, m.tags, m.likes, m.description));
        });
        sessionStorage.setItem("listMedia", JSON.stringify(listMedia));
    }
}