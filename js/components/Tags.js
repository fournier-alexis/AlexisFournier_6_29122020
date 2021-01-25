import Tag from "./profile/Tag";

export default class Tags{
    constructor(tags){
        this._tags = tags;
    }

    createElement(){
        const divTags = document.createElement('div');
        divTags.className = "tags";
        this._tags.forEach(value => {
            divTags.appendChild(new Tag(value).createElement());
        });
        return divTags;
    }
}