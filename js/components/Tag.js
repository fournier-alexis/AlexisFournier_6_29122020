export default class Tag{
    constructor(tag){
        this._tag = tag;
    }

    createElement(){
        const tag = document.createElement("button");
        tag.className = "tag";
        tag.textContent = "#" + this._tag;
        return tag;
    }
}