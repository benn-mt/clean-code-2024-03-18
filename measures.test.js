const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./measures");

describe('Conversion between different measurements', () =>{ 
    test('can be created through helper methods', () =>{
        expect(TEASPOON.s(3).equals(TEASPOON.s(3))).toBe(true);
    })

    test('work for the examples given', () => {
        expect(TABLESPOON.s(1).equals(TEASPOON.s(3))).toBe(true);
        expect(OUNCE.s(1).equals(TABLESPOON.s(2))).toBe(true);
        expect(CUP.s(1).equals(OUNCE.s(8))).toBe(true);
        expect(PINT.s(1).equals(CUP.s(2))).toBe(true);
        expect(QUART.s(1).equals(PINT.s(2))).toBe(true);
        expect(GALLON.s(1).equals(QUART.s(4))).toBe(true);
    })

    test('random conversions', () =>{
        expect(GALLON.s(1).equals(TEASPOON.s(4*2*2*8*2*3))).toBe(true);
        expect(TEASPOON.s(6).equals(OUNCE.s(1))).toBe(true);
    })
})