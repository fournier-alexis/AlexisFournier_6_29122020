import Media from "../metier/Media.js";

/**Class data access object media */
export default class DaoMedia {
    /**
     * Singleton to create or get DaoMedia
     * @returns {DaoMedia}
     */
    constructor() {
        if (DaoMedia._instance) {
            return DaoMedia._instance;
        }
        DaoMedia._instance = this;
    }

    /**
     * Load all medias and save them in sessionStorage
     * @param data {object}
     */
    loadMedia(data) {
        const listMedia = [];
        data.forEach(m => {
            listMedia.push(new Media(m.id, m.photographerId, m.image, m.video, m.tags, m.likes, m.date, m.price, m.description));
        });
        sessionStorage.setItem("listMedia", JSON.stringify(listMedia));
    }
}