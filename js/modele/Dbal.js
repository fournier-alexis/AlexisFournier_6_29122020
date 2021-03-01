/**Class database abstraction layer */
export default class Dbal {
    /**
     * Singleton to create or get dbal
     * @param path {string} path to json datas
     * @returns {Dbal}
     */
    constructor(path) {
        if (Dbal._instance) {
            return Dbal._instance;
        }
        Dbal._path = path;
        Dbal._instance = this;
    }

    /**
     * Get and return all datas
     * @returns {Promise<null>}
     */
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