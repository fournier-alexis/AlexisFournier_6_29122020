export default class Media{
    constructor(id, photographerId, image, video, tags, likes, description) {
        this.id = id;
        this.photographerId = photographerId;
        this.image = image;
        this.video = video;
        this.tags = tags;
        this.likes = likes;
        this.description = description;
    }
}