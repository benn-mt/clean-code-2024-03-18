const {TEASPOON, TABLESPOON, OUNCE} = require("./volumes");

describe ('Unit objects....', () => {
    test('can calculate amounts in other units', () =>{
        expect(TEASPOON.convertedAmount(3, TEASPOON)).toBe(3);
        expect(TEASPOON.convertedAmount(1, TABLESPOON)).toBe(3);
        expect(TEASPOON.convertedAmount(1, OUNCE)).toBe(2*3);
        expect(TABLESPOON.convertedAmount(3, TEASPOON)).toBe(1);
        expect(TEASPOON.convertedAmount(3, TABLESPOON)).toBe(9);
    })
})