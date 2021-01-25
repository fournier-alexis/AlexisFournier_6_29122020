import "./../../../css/components/profile/location.css";

export default class Location {
    constructor(city, country){
        this._city = city;
        this._country = country;

    }
    createElement(){
        const location = document.createElement('p');
        location.textContent = this._city + ', ' + this._country;
        location.className = "location";
        return location;
    }
}
