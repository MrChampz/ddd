"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const product_service_1 = require("./product.service");
describe("ProductService", () => {
    it("should change the price of all products", () => {
        const product1 = new product_1.default("1", "Product 1", 100);
        const product2 = new product_1.default("2", "Product 2", 200);
        const products = [product1, product2];
        product_service_1.default.increasePrice(products, 100);
        expect(product1.price).toBe(200);
        expect(product2.price).toBe(400);
    });
});
