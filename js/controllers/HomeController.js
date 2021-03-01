import ListPhotographers from "../components/ListPhotographers";
import Controller from "./Controller";

export default class HomeController{
    constructor() {
        this.registerListeners();
    }

    registerListeners(){
        document.getElementById("logo").addEventListener("click", this.goHome);
        document.getElementById("logo").addEventListener("keydown", this.goHome);
        document.getElementById("up").addEventListener("click", this.toTheTop);
        document.querySelectorAll(".tag").forEach((tag) => {
            tag.addEventListener("click", this.selectTag);
        });
        document.querySelectorAll(".thumbPhotographer").forEach((photographer) => {
            photographer.addEventListener("click", (evt)=>{this.selectPhotographer(evt, photographer)});
        });
        document.querySelectorAll(".thumbPhotographer").forEach((photographer) => {
            photographer.addEventListener("keydown", (evt)=>{this.selectPhotographer(evt, photographer)});
        });
    }

    goHome(event){
        if (Controller.isValidInput(event)){
            window.location.href = "./index.html";
        }
    }

    /**
     * Go to the top of page
     */
    toTheTop() {
        window.scrollTo(0, 0);
    }

    selectTag(evt){
        const tag = (evt.target.firstChild.data).substring(1);
        document.getElementById("section").innerHTML = "";
        document.getElementById("section").appendChild(new ListPhotographers( JSON.parse(sessionStorage.getItem("listPhotographer"))).createElement(tag));
        new HomeController();
    }

    selectPhotographer(event, photographer){
        if (Controller.isValidInput(event)){
            window.location.href = "./html/photographer-page.html";
            sessionStorage.setItem("photographerNameSelected", photographer.dataset.name);
        }
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