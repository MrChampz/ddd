"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(street, number, city, state, zipcode) {
        this._number = 0;
        this._street = street;
        this._number = number;
        this._city = city;
        this._state = state;
        this._zipcode = zipcode;
        this.validate();
    }
    validate() {
        if (this._street.length < 1) {
            throw new Error("Street is required");
        }
        if (this._number < 1) {
            throw new Error("Number is required");
        }
        if (this._city.length < 1) {
            throw new Error("City is required");
        }
        if (this._state.length < 1) {
            throw new Error("State is required");
        }
        if (this._zipcode.length < 1) {
            throw new Error("Zipcode is required");
        }
    }
}
exports.default = Address;
