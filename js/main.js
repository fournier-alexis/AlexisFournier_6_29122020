import Dbal from "./modele/Dbal.js";
import DaoPhotographer from "./modele/DaoPhotographer.js";
import DaoMedia from "./modele/DaoMedia.js";
import Photographer from "./metier/Photographer.js";
import Media from "./metier/Media.js";

const dbal = new Dbal("./src/data.json")
const data = dbal.load();
const daoPhotographer = new DaoPhotographer();
const daoMedia = new DaoMedia();
daoPhotographer.loadPhotographes(data);
daoMedia.loadMedia(data)

console.log(Photographer.listPhotographer);
console.log(Media.listMedia);