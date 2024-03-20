const {Quantity} = require('./quantity')

class Unit{
    constructor(relativeRatio = 1, relativeUnit){
        if (relativeUnit){
            this._ratioToBaseUnit = relativeRatio * relativeUnit._ratioToBaseUnit;
        } else {
            this._ratioToBaseUnit = 1;
        }
    }

    s(amount){
        return new Quantity(amount, this);
    }

    convertedAmount(otherAmount, otherUnit){
        return otherAmount * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
    }
}

module.exports = {Unit}