import "./../../../css/components/profile/avatar.css";

/**Component representing the photographer's avatar */
export default class Avatar{
    /**
     * Create an Avatar
     * @param name {string} photographer folder name
     * @param portrait {string} avatar image name
     */
    constructor(name, portrait){
        this._name = name;
        this._portrait = portrait;
    }

    /**
     * Create and return the element
     * @param start {string} path start ("." | "../..")
     * @param size {"1x" | "2x"}
     * @returns {HTMLImageElement}
     */
    createElement(start, size){
        const portrait = document.createElement('img');

        portrait.src = start + "/src/photographers/" + this._name + "/" + this._portrait;
        portrait.alt = this._portrait;
        portrait.className = "portrait size-" + size;

        return portrait;
    }
}