"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(id, productId, name, price, quantity) {
        this._id = id;
        this._productId = productId;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    validate() {
        if (this._quantity <= 0) {
            throw new Error("Item quantity must be greater than 0");
        }
    }
    get price() {
        return this._price * this._quantity;
    }
}
exports.default = OrderItem;
