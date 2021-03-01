/**Class representing a photographer */
export default class Photographer{
    /**
     * Create a photographer
     * @param name {string} name of the photographer
     * @param id {number} id of the photographer
     * @param city {string}
     * @param country {string}
     * @param tags {string[]} associated tag list
     * @param tagline {string} sentence about photographer
     * @param price {price} daily price
     * @param portrait {string} path to the main picture of photographer
     */
    constructor(name, id, city, country, tags, tagline, price, portrait) {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }
}