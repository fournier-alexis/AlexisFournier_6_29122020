import "./../../../css/components/profile/tagline.css";

export default class Tagline{
    constructor(tagline){
        this._tagline = tagline
    }

    /**
     * @return HTMLElement
     */
    createElement(){
        const tagline = document.createElement('p');
        tagline.textContent = this._tagline;
        tagline.className = "tagline";
        return tagline;
    }
}