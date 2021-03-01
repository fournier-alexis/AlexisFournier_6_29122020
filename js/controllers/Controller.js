import Tag from "../metier/Tag";

export default class Controller{
    static listTag = [];

    static addTags(tags) {
        tags.forEach(tag => {
            const label = tag;
            let found = this.tagContains(label);
            if (!found) {
                this.listTag.push(new Tag(label));
            }
        });
    }

    static tagContains(label) {
        let found = false;
        this.listTag.forEach(t => {
            if (t.label === label) {
                found = true;
            }
        });
        return found;
    }

    static getPhotographerByName(name) {
        let photographer = null;
        JSON.parse(sessionStorage.getItem("listPhotographer")).forEach(p => {
            if (p.name === name) {
                photographer = p;
            }
        })
        return photographer;
    }

    static getMediaByPhotographerId(id){
        let medias = [];
        JSON.parse(sessionStorage.getItem("listMedia")).forEach(m => {
            if (m.photographerId === id) {
                medias.push(m);
            }
        })
        medias.sort((a, b) => {
            let compare = a;
            switch(localStorage.getItem("currentFilter")){
                case "popular":
                    compare = b.likes - a.likes;
                    break;
                case "date":
                    compare = new Date(b.date) - new Date(a.date);
                    break;
                case "title":
                    compare = a.description.localeCompare(b.description);
                    break;
            }
            return compare;
        })
        return medias;
    }

    static getMediaByPath(photographerId, path){
        const index = this.getIndexOfMedia(photographerId, path);
        return this.getMediaOfIndex(photographerId, index);
    }

    /**
     *
     * @param photographerId
     * @param media
     * @returns {number}
     */
    static getIndexOfMedia(photographerId, media){
        let index = -1;
        const medias = this.getMediaByPhotographerId(photographerId);
        for (let i = 0; i < medias.length; i++){
            if (medias[i].image === media || medias[i].video === media){
                index = i;
            }
        }
        return index;
    }

    static getMediaOfIndex(photographerId, index) {
        return this.getMediaByPhotographerId(photographerId)[index];
    }

    /**
     * Return the sum of likes of a photographer
     * @param photographerId
     */
    static getPhotographerLikes(photographerId){
        const medias = this.getMediaByPhotographerId(photographerId);
        let likes = 0;
        medias.forEach((media) =>{
            likes += media.likes;
        })
        return likes;
    }

    /**
     * Change l'opacité de la page "photographer-page"
     * @param opacity : string
     * @return void
     */
    static setBackgroundOpacity(opacity) {
        const header = document.getElementById("header");
        const profile = document.getElementById("profile");
        const label = document.getElementById("label");
        const select = document.getElementById("sort");
        const listMedia = document.getElementsByClassName("listMedias");
        const results = document.getElementsByClassName("results");

        header.style.opacity = opacity;
        profile.style.opacity = opacity;
        label.style.opacity = opacity;
        select.style.opacity = opacity;
        listMedia.forEach((media) => {
            media.style.opacity = opacity;
        })
        results.forEach((result) => {
            result.style.opacity = opacity;
        })
    }

    static isValidInput(event) {
        let isValidInput = false;

        if (event.key && event.key === "Enter") {
            isValidInput = true;
        } else if (!event.key) {
            isValidInput = true;
        }

        return isValidInput;
    }
}