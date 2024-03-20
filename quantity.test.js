const {Quantity} = require("./quantity");
const {TEASPOON, TABLESPOON} = require("./volumes");
const {INCH, FOOT} = require("./lengths");

describe ('Quantity objects....', () => {
    test('are equal when quantity matches and units are compatible', () => {
        expect(new Quantity(3, TEASPOON).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(new Quantity(4, TEASPOON).equals(new Quantity(5, TEASPOON))).toBe(false);
        expect(new Quantity(3, TEASPOON).equals(new Quantity(3, TABLESPOON))).toBe(false);
        expect(new Quantity(3, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(false);
        expect(new Quantity(3, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(false);
        expect(new Quantity(3, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(true);
        expect(new Quantity(1, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(true);

        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, INCH))).toBe(false);
    })

    test('can be added together if units are compatible', () =>{
        expect(new Quantity(1,TEASPOON).add(new Quantity(0,TEASPOON))).toEqual(new Quantity(1,TEASPOON))
        expect(new Quantity(1,TEASPOON).add(new Quantity(1,TEASPOON))).toEqual(new Quantity(2,TEASPOON))
        expect(new Quantity(1,TEASPOON).add(new Quantity(1,TABLESPOON))).toEqual(new Quantity(4,TEASPOON))
        expect(new Quantity(1,TABLESPOON).add(new Quantity(1,TEASPOON)).equals(new Quantity(4,TEASPOON))).toBe(true)

        expect(() => {
            new Quantity(1, TEASPOON).add(new Quantity(1, INCH));
        }).toThrow(Error);
    })
})