"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductService {
    static increasePrice(products, percentage) {
        products.forEach((product) => {
            const amount = (product.price * percentage) / 100 + product.price;
            product.changePrice(amount);
        });
    }
}
exports.default = ProductService;
