class CacheManager {
    constructor() {
        this.cache = {};
    }

    set(key, value) {
        this.cache[key] = value;
    }

    get(key) {
        return this.cache[key];
    }

    delete(key) {
        delete this.cache[key];
    }

    clear() {
        this.cache = {};
    }
}

module.exports = CacheManager;
