import Product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product.repository";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
  async find(id: string): Promise<Product> {
    const productModel = await ProductModel.findOne({ where: { id } });

    if (!productModel) {
      throw new Error("Product not found");
    }

    return new Product(productModel.id, productModel.name, productModel.price);
  }

  async findAll(): Promise<Product[]> {
    const productModels = await ProductModel.findAll();

    return productModels.map(
      (productModel) =>
        new Product(productModel.id, productModel.name, productModel.price)
    );
  }

  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  }

  async update(product: Product): Promise<void> {
    await ProductModel.update(
      {
        name: product.name,
        price: product.price,
      },
      {
        where: {
          id: product.id,
        },
      }
    );
  }
}
