import "core-js/stable";
import "regenerator-runtime/runtime";

import Dbal from "./modele/Dbal";
import DaoPhotographer from "./modele/DaoPhotographer";
import DaoMedia from "./modele/DaoMedia";
import ListPhotographers from "./components/ListPhotographers";
import Filter from "./components/Filter";
import Controller from "./controllers/Controller";
import HomeController from "./controllers/HomeController";

const dbal = new Dbal("./src/data.json")
const data = dbal.load();
const daoPhotographer = new DaoPhotographer();
const daoMedia = new DaoMedia();

data.then(res => {
    daoPhotographer.loadPhotographes(res["photographers"]);
    daoMedia.loadMedia(res["media"]);
    document.getElementById("header").appendChild(new Filter().createElement());
    document.getElementById("main").appendChild(new ListPhotographers(Controller.listPhotographer).createElement());
    new HomeController();
})