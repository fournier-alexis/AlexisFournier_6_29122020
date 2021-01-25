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
        return medias;
    }
}