export default class Photographer{
    static listPhotographer = [];
    constructor(name, id, city, country, tags) {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
    }
}