export default class Media{
    static listMedia = [];
    constructor(id, photographerID, image, tags, likes, description) {
        this.id = id;
        this.photographerID = photographerID;
        this.image = image;
        this.tags = tags;
        this.likes = likes;
        this.description = description;
    }
}