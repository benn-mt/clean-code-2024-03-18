const {Quantity} = require('./quantity')

class Unit{
    constructor(relativeRatio = 1, relativeUnit){
        if (relativeUnit){
            this._ratioToBaseUnit = relativeRatio * relativeUnit._ratioToBaseUnit;
            this._baseUnit = relativeUnit._baseUnit;
        } else {
            this._ratioToBaseUnit = 1;
            this._baseUnit = this;
        }
    }

    s(amount){
        return new Quantity(amount, this);
    }

    convertedAmount(otherAmount, otherUnit){
        return otherAmount * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
    }

    isCompatibleWith(otherUnit){
        return this._baseUnit === otherUnit._baseUnit;
    }
}

module.exports = {Unit}