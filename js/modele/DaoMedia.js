import Media from "../metier/Media.js";

export default class DaoMedia{
    constructor() {
        if (DaoMedia._instance){
            return DaoMedia._instance;
        }
        DaoMedia._instance = this;
    }
    loadMedia(data){
        data.then(res =>{
            res["media"].forEach(m => {
                Media.listMedia.push(new Media(m.id, m.photographerID, m.image, m.tags, m.likes, m.description));
            });
        });
    }
}