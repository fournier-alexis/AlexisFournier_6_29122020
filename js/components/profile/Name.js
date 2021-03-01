import "./../../../css/components/profile/name.css";

/**Component representing the photographer's name */
export default class Name {
    /**
     * Create a Name
     * @param name {string}
     */
    constructor(name){
        this._name = name;
    }

    /**
     * Create and return element
     * @param type {"h1"|"h2"} chosen type
     * @returns {HTMLHeadingElement}
     */
    createElement(type){
        let nameElement;

        if (type === "h1"){
            nameElement = document.createElement("h1");
        } else {
            nameElement = document.createElement("h2");
        }

        nameElement.className = "name" + type;
        nameElement.textContent = this._name;

        return nameElement;
    }
}