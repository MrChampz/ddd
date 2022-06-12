"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("../entity/customer");
const order_1 = require("../entity/order");
const order_item_1 = require("../entity/order_item");
const order_service_1 = require("./order.service");
describe("OrderService", () => {
    it("should place an order", () => {
        const customer = new customer_1.default("123", "John Doe");
        const item1 = new order_item_1.default("123", "1", "Item 1", 10, 1);
        const order = order_service_1.default.placeOrder(customer, [item1]);
        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });
    it("should get total of all orders", () => {
        const item1 = new order_item_1.default("1", "1", "Product 1", 100, 1);
        const order1 = new order_1.default("1", "1", [item1]);
        const item2 = new order_item_1.default("2", "2", "Product 2", 200, 2);
        const order2 = new order_1.default("2", "2", [item2]);
        const total = order_service_1.default.total([order1, order2]);
        expect(total).toBe(500);
    });
});
