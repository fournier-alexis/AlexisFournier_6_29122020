import Tag from "../metier/Tag";

export default class Controller{
    static listMedia = [];
    static listTag = [];
    static listPhotographer = [];

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
}