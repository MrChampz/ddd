"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("./entity/address");
const customer_1 = require("./entity/customer");
const order_1 = require("./entity/order");
const order_item_1 = require("./entity/order_item");
let customer = new customer_1.default("5", "John Di Di");
const address = new address_1.default("Main St", 123, "Anytown", "CA", "90210");
customer.address = address;
customer.activate();
const item1 = new order_item_1.default("123", "1", "Item 1", 100, 1);
const item2 = new order_item_1.default("456", "2", "Item 2", 200, 2);
const order = new order_1.default("123", "5", [item1, item2]);
