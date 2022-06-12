import Product from "../entity/product";

export default class ProductService {
  static increasePrice(products: Product[], percentage: number) {
    products.forEach((product) => {
      const amount = (product.price * percentage) / 100 + product.price;
      product.changePrice(amount);
    });
  }
}
