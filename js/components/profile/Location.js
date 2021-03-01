import "./../../../css/components/profile/location.css";

/**Component representing a photographer location */
export default class Location {
    /**
     * Create a Location
     * @param city {string}
     * @param country {string}
     */
    constructor(city, country){
        this._city = city;
        this._country = country;

    }

    /**
     * Create and return the element
     * @returns {HTMLParagraphElement}
     */
    createElement(){
        const location = document.createElement('p');

        location.textContent = this._city + ', ' + this._country;
        location.className = "location";

        return location;
    }
}
