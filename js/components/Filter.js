import HTMLTag from "./profile/Tag.js"
import Controller from "../controllers/Controller";

/**Component representing a tag filter */
export default class Filter {
    /**
     * Create a Filter
     */
    constructor(){}

    /**
     * Create and return element
     * @returns {HTMLElement}
     */
    createElement() {
        const filters = document.createElement("nav");

        Controller.listTag.forEach(tag => {
            filters.appendChild(new HTMLTag(tag.label).createElement(true));
        });

        return filters;
    }
}