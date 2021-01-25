import HTMLTag from "./profile/Tag.js"
import Controller from "../controllers/Controller";

export default class Filter {
    createElement() {
        const filters = document.createElement("nav");
        Controller.listTag.forEach(tag => {
            filters.appendChild(new HTMLTag(tag.label).createElement());
        });
        return filters;
    }
}