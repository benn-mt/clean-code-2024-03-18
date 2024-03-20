const { Unit } = require("./unit");

describe ('Unit objects....', () => {
    test('can calculate amounts in other units', () =>{
        var teaspoon = new Unit();
        var tablespoon = new Unit(3, teaspoon);
        var ounce = new Unit(2, tablespoon);
        expect(teaspoon.convertedAmount(3, teaspoon)).toBe(3);
        expect(teaspoon.convertedAmount(1, tablespoon)).toBe(3);
        expect(tablespoon.convertedAmount(3, teaspoon)).toBe(1);
        expect(teaspoon.convertedAmount(1, ounce)).toBe(2*3);
        expect(teaspoon.convertedAmount(3, tablespoon)).toBe(9);
    })

    test('Units with same base unit are compatible', () => {
        var teaspoon = new Unit();
        var tablespoon = new Unit(3, teaspoon);
        var ounce = new Unit(2, tablespoon);
        var inch = new Unit();
        var foot = new Unit(12, inch);
        expect(teaspoon.isCompatibleWith(teaspoon)).toBe(true);
        expect(inch.isCompatibleWith(teaspoon)).toBe(false);
        expect(ounce.isCompatibleWith(tablespoon)).toBe(true);
        expect(foot.isCompatibleWith(tablespoon)).toBe(false);
    })
})