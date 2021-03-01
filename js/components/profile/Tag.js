import "./../../../css/components/profile/tag.css";

/**Component representing a tag */
export default class Tag{
    /**
     * Create a Tag
     * @param tag {string}
     */
    constructor(tag){
        this._tag = tag;
    }

    /**
     * Create and return element
     * @returns {HTMLButtonElement}
     */
    createElement(isIndexed){
        const tag = document.createElement("button");

        tag.className = "tag";
        tag.textContent = "#" + this._tag;
        tag.tabIndex = isIndexed ? 1 : -1;

        return tag;
    }
}