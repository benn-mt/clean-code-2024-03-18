class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._amount == this._unit.convertedAmount(other._amount, other._unit)
        && this._unit.isCompatibleWith(other._unit);
    }

    add(other) {
        if (!this._unit.isCompatibleWith(other._unit)) throw new Error("Incompatible units");
        return new Quantity(this._amount+this._unit.convertedAmount(other._amount, other._unit),this._unit)
    }
}

module.exports = {Quantity}