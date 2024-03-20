const {INCH, FOOT, YARD, FURLONG, MILE} = require("./lengths");

describe('Conversion between different measurements', () =>{ 

    test('work for the examples given', () => {
        expect(INCH.s(12).equals(FOOT.s(1))).toBe(true);
        expect(FOOT.s(3).equals(YARD.s(1))).toBe(true);
        expect(YARD.s(270).equals(FURLONG.s(1))).toBe(true);
        expect(FURLONG.s(8).equals(MILE.s(1))).toBe(true);
    })
})