const assert = require('assert');
const CacheManager = require('../src/cacheManager');

describe('CacheManager', () => {
    let cacheManager;

    beforeEach(() => {
        cacheManager = new CacheManager();
    });

    it('should set and get value from cache', () => {
        cacheManager.set('key1', 'value1');
        assert.strictEqual(cacheManager.get('key1'), 'value1');
    });

    it('should delete value from cache', () => {
        cacheManager.set('key1', 'value1');
        cacheManager.delete('key1');
        assert.strictEqual(cacheManager.get('key1'), undefined);
    });

    it('should clear cache', () => {
        cacheManager.set('key1', 'value1');
        cacheManager.set('key2', 'value2');
        cacheManager.clear();
        assert.strictEqual(Object.keys(cacheManager.cache).length, 0);
    });
});
