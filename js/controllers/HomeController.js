import ListPhotographers from "../components/ListPhotographers";
import Controller from "./Controller";

export default class HomeController{
    constructor() {
        this.registerListeners();
    }

    registerListeners(){
        document.getElementById("logo").addEventListener("click", this.goHome);
        document.getElementById("up").addEventListener("click", this.toTheTop);
        document.querySelectorAll(".tag").forEach((tag) => {
            tag.addEventListener("click", this.selectTag);
        });
    }

    goHome(){
        window.location.href = "./index.html";
    }

    /**
     * Go to the top of page
     */
    toTheTop() {
        window.scrollTo(0, 0);
    }

    selectTag(evt){
        const tag = (evt.target.firstChild.data).substring(1);
        document.getElementById("main").innerHTML = "";
        document.getElementById("main").appendChild(new ListPhotographers(Controller.listPhotographer).createElement(tag));
    }
}

/**
 * Control display of up button
 */
window.onscroll = function() {
    if (window.pageYOffset < 80) {
        document.getElementById("up").style.transform = "scale(0)";
    } else {
        document.getElementById("up").style.transform = "scale(1)";
    }
}