import Tag from "./profile/Tag";

/**Component representing a tag list */
export default class Tags{
    /**
     * Create a tag list
     * @param tags {String[]}
     */
    constructor(tags){
        this._tags = tags;
    }

    /**
     * Create and return element
     * @returns {HTMLDivElement}
     */
    createElement(){
        const divTags = document.createElement('div');
        divTags.className = "tags";

        this._tags.forEach(value => {
            divTags.appendChild(new Tag(value).createElement(false));
        });

        return divTags;
    }
}