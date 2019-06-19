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

describe('succeed', () => {
    it('exists', () => {
        expect(enhancer.succeed).toBeDefined();
    });

    it('does increase enhnacement when value is less than 20', () => {
        let item = { enhancement : 19 };
        let expected = 20;
        let actual = enhancer.succeed(item).enhancement;

        expect(actual).toBe(expected);
    });

    it('does not increment enhnacement when value is already 20 or up', () => {
        let item = { enhancement: 20};
        let expected = 20;
        let actual = enhancer.succeed(item).enhancement;

        expect(actual).toBe(expected);
    })
});

describe('fail', () => {
    it('decreases durability by 5 when enhancement < 15', () => {
        let item = {enhancement: 13, durability : 10};
        let expected = 5;
        let actual = enhancer.fail(item).durability;

        expect(actual).toBe(expected);
    });

    it('decreases durability by 10 when enhancement >=  15', () => {
        let item = {enhancement: 20, durability : 15};
        let expected = 5;
        let actual = enhancer.fail(item).durability;

        expect(actual).toBe(expected);
    });

    it('decreases durability by 10 when enhancement >=  15', () => {
        let item = {enhancement: 20, durability : 15};
        let expected = 19;
        let actual = enhancer.fail(item).enhancement;

        expect(actual).toBe(expected);
    });
})