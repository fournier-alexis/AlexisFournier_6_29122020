/**Class representing a Media */
export default class Media{
    /**
     * Create a media
     * @param id {number} id of image
     * @param photographerId {number} id of photographer
     * @param image {string} path to image location
     * @param video {string} path to video location
     * @param tags {string[]} associated tag list
     * @param likes {number} x - number of people who like the image
     * @param date {Date} date have been taken
     * @param price {number} cost of the image
     * @param description {string} description of the image
     */
    constructor(id, photographerId, image, video, tags, likes,date, price, description) {
        this.id = id;
        this.photographerId = photographerId;
        this.image = image;
        this.video = video;
        this.tags = tags;
        this.likes = likes;
        this.date = new Date(date);
        this.price = price;
        this.description = description;
    }
}