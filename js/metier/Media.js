export default class Media{
    static listMedia = [];
    constructor(id, photographerID, image, tags, likes) {
        this.id = id;
        this.photographerID = photographerID;
        this.image = image;
        this.tags = tags;
        this.likes = likes;
    }
}