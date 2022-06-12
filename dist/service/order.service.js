"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../entity/order");
class OrderService {
    static placeOrder(customer, items) {
        const order = new order_1.default("id", customer.id, items);
        customer.addRewardPoints(order.total() / 2);
        return order;
    }
    static total(orders) {
        return orders.reduce((total, order) => total + order.total(), 0);
    }
}
exports.default = OrderService;
