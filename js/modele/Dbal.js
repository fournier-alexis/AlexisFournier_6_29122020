export default class Dbal {
    constructor(path) {
        if (Dbal._instance) {
            return Dbal._instance;
        }
        Dbal._path = path;
        Dbal._instance = this;
    }

    async load() {
        let data = null;
        await fetch(Dbal._path)
            .then(res => res.text())
            .then(text => {
                data = JSON.parse(text);
            });
        return data;
    }
}