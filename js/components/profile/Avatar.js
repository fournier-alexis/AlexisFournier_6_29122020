import "./../../../css/components/profile/avatar.css";

export default class Avatar{
    constructor(name, portrait){
        this._name = name;
        this._portrait = portrait;
    }

    /**
     *
     * @param start
     * @param size
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