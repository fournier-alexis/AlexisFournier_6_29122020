/**Component representing a Media title */
export default class Title{
    /**
     * Create a Media title
     * @param title {string}
     */
    constructor(title){
        this._title = title;
    }

    /**
     * Create and return the element
     * @returns {HTMLParagraphElement}
     */
    createElement(){
        const title = document.createElement('p');

        title.className = "title";
        title.id = this._title.toLowerCase().replaceAll(" ", "-") + "-label";
        title.textContent = this._title;

        return title;
    }
}