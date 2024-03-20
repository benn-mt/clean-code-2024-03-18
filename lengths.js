const {Unit} = require('./unit');

const INCH = new Unit();
const FOOT = new Unit(12, INCH);
const YARD = new Unit(3, FOOT);
const FURLONG = new Unit(270, YARD);
const MILE = new Unit(8, FURLONG);

module.exports = {INCH, FOOT, YARD, FURLONG, MILE}