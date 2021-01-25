import ListPhotographers from "../components/ListPhotographers";
import Controller from "./Controller";
import PhotographerController from "./PhotographerController";

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
        document.querySelectorAll(".thumbPhotographer").forEach((photographer) => {
            photographer.addEventListener("click", (evt)=>{this.selectPhotographer(evt, photographer)});
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
        document.getElementById("main").appendChild(new ListPhotographers( JSON.parse(sessionStorage.getItem("listPhotographer"))).createElement(tag));
        new HomeController();
    }

    selectPhotographer(evt, photographer){
        window.location.href = "./html/photographer-page.html";
        sessionStorage.setItem("photographerNameSelected", photographer.dataset.name);
    }
}

/**
 * Control display of up button
 */
window.onscroll = function() {
    if (document.title === "Fisheye"){
        if (window.pageYOffset < 80) {
            document.getElementById("up").style.transform = "scale(0)";
        } else {
            document.getElementById("up").style.transform = "scale(1)";
        }
    }
}