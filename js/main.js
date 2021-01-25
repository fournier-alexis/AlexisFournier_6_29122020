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

if (document.title !== ""){
    const dbal = new Dbal("./src/data.json")
    const data = dbal.load();
    const daoPhotographer = new DaoPhotographer();
    const daoMedia = new DaoMedia();

    data.then(res => {
        daoPhotographer.loadPhotographes(res["photographers"]);
        daoMedia.loadMedia(res["media"]);
        document.getElementById("header").appendChild(new Filter().createElement());
        document.getElementById("main").appendChild(new ListPhotographers( JSON.parse(sessionStorage.getItem("listPhotographer"))).createElement());
        new HomeController();
    })
}
if (document.title === ""){
    const photographerSelected = Controller.getPhotographerByName(sessionStorage.getItem("photographerNameSelected"));
    document.title = photographerSelected.name;
    document.getElementById("profile").appendChild(new ProfileHeader(photographerSelected).createElement());
    document.getElementById("main").appendChild(new ListMedia(photographerSelected.id, photographerSelected.name).createElement());
}
