const enhancer = require('./enhancer.js');
// test away!

describe('repair', () => {
    it('returns a new item with durability restored to 100', () => {
        let item = {durability: 25};
        let expected = enhancer.repair(item).durability;
        let actual = 100;

        expect(expected).toBe(actual);
    });
});
