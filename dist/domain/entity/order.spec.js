"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("./order");
const order_item_1 = require("./order_item");
describe("Order", () => {
    it("should throw error when id is empty", () => {
        expect(() => new order_1.default("", "1", [])).toThrowError("Id is required");
    });
    it("should throw error when customerId is empty", () => {
        expect(() => new order_1.default("1", "", [])).toThrowError("CustomerId is required");
    });
    it("should throw error when items is empty", () => {
        expect(() => new order_1.default("1", "1", [])).toThrowError("Item count must be greater than 0");
    });
    it("should throw error if some item has quantity less than 1", () => {
        const item1 = new order_item_1.default("1", "1", "Product 1", 10, 0);
        const item2 = new order_item_1.default("2", "2", "Product 2", 20, 1);
        expect(() => new order_1.default("1", "1", [item1, item2])).toThrowError("Item quantity must be greater than 0");
    });
    it("should calculate total", () => {
        const item1 = new order_item_1.default("1", "1", "Item 1", 10, 1);
        const item2 = new order_item_1.default("2", "2", "Item 2", 20, 2);
        const order = new order_1.default("1", "1", [item1, item2]);
        expect(order.total()).toBe(50);
    });
});
