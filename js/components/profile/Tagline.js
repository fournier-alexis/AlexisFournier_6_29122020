import "./../../../css/components/profile/tagline.css";

/**Component representing a tagline */
export default class Tagline{
    /**
     * Create a tagline
     * @param tagline {string}
     */
    constructor(tagline){
        this._tagline = tagline
    }

    /**
     * Create and return element
     * @return HTMLElement
     */
    createElement(){
        const tagline = document.createElement('p');

        tagline.textContent = this._tagline;
        tagline.className = "tagline";

        return tagline;
    }
}