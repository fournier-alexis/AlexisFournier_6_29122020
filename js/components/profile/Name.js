import "./../../../css/components/profile/name.css";

export default class Name {
    constructor(name){
        this._name = name;
    }

    createElement(type){
        let nameElement = null;
        if (type === "h1"){
            nameElement = document.createElement("h1");
        } else {
            nameElement = document.createElement("h2");
        }
        nameElement.className = "name" + type;
        nameElement.textContent = this._name;
        return nameElement;
    }
}