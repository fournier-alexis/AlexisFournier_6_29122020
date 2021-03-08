import "core-js/stable";
import "regenerator-runtime/runtime";

import Dbal from "./modele/Dbal";
import DaoPhotographer from "./modele/DaoPhotographer";
import DaoMedia from "./modele/DaoMedia";
import ListPhotographers from "./components/ListPhotographers";
import Filter from "./components/Filter";
import Controller from "./controllers/Controller";
import HomeController from "./controllers/HomeController";
import ProfileHeader from "./components/ProfileHeader";
import ListMedia from "./components/ListMedia";
import PhotographerController from "./controllers/PhotographerController";
import Name from "./components/profile/Name";
import ContactController from "./controllers/ContactController";
import Results from "./components/Results";

//If the user is currently on "index.html"
if (document.title !== ""){
    const dbal = new Dbal("./src/data.json")
    const data = dbal.load();
    const daoPhotographer = new DaoPhotographer();
    const daoMedia = new DaoMedia();

    data.then(res => {
        //Load photographers & medias
        daoPhotographer.loadPhotographes(res["photographers"]);
        daoMedia.loadMedia(res["media"]);

        //Load elements
        document.getElementById("header").appendChild(new Filter().createElement());
        document.getElementById("section").appendChild(new ListPhotographers(
            JSON.parse(sessionStorage.getItem("listPhotographer")))
            .createElement(sessionStorage.getItem("selectedTag")));

        //Load controllers
        new HomeController();
    })
}
//if the user is currently on "photographer-page.html"
if (document.title === ""){
    const photographerSelected = Controller.getPhotographerByName(sessionStorage.getItem("photographerNameSelected"));
    localStorage.setItem("currentFilter", "popular");
    document.title = photographerSelected.name;

    //Load elements
    document.getElementById("profile").appendChild(new ProfileHeader(photographerSelected).createElement());
    document.getElementById("main").appendChild(new ListMedia(photographerSelected.id, photographerSelected.name).createElement());
    document.getElementById("photographer-name").appendChild(new Name(photographerSelected.name).createElement("h1"));
    document.getElementById("main").appendChild(new Results(photographerSelected).createElement());

    //Load controllers
    new PhotographerController(photographerSelected);
    new ContactController();
}
