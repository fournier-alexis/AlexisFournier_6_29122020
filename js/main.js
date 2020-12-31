import Dbal from "./modele/Dbal.js";
import DaoPhotographer from "./modele/DaoPhotographer.js";
import DaoMedia from "./modele/DaoMedia.js";
import Photographer from "./metier/Photographer.js";
import ListPhotographers from "./components/ListPhotographers.js";

const dbal = new Dbal("./src/data.json")
const data = dbal.load();
const daoPhotographer = new DaoPhotographer();
const daoMedia = new DaoMedia();

data.then(res => {
    daoPhotographer.loadPhotographes(res["photographers"]);
    daoMedia.loadMedia(res["media"]);
    document.body.appendChild(new ListPhotographers(Photographer.listPhotographer).createElement());
})