import ListPhotographers from "../components/ListPhotographers";
import Controller from "./Controller";

/**
 * Represent the controller of index.html
 */
export default class HomeController{
    constructor() {
        this.registerListeners();
    }

    /**
     * Register all listeners
     * retuen {void}
     */
    registerListeners(){
        document.getElementById("logo").addEventListener("click", this.refresh);
        document.getElementById("logo").addEventListener("keydown", this.refresh);
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

    /**
     * Refresh the page
     * @param event
     * @return {void}
     */
    refresh(event){
        if (Controller.isValidInput(event)){
            window.location.href = "./index.html";
        }
    }

    /**
     * Go to the top of page
     * return {void}
     */
    toTheTop() {
        window.scrollTo(0, 0);
    }

    /**
     * Sort photographer when a tag is selected
     * @param evt
     * @return {void}
     */
    selectTag(evt){
        const tag = (evt.target.firstChild.data).substring(1);
        document.getElementById("section").innerHTML = "";
        document.getElementById("section").appendChild(new ListPhotographers( JSON.parse(sessionStorage.getItem("listPhotographer"))).createElement(tag));
        new HomeController();
    }

    /**
     * Go to the photographer's page
     * @param event
     * @param photographer
     * @return {void}
     */
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