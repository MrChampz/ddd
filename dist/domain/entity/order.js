"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this.validate();
        this._total = this.total();
    }
    validate() {
        if (this._id.length < 1) {
            throw new Error("Id is required");
        }
        if (this._customerId.length < 1) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length < 1) {
            throw new Error("Item count must be greater than 0");
        }
        this._items.forEach((item) => item.validate());
    }
    total() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
}
exports.default = Order;
