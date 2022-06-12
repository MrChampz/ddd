import { Sequelize } from "sequelize-typescript";

import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import Product from "../../domain/entity/product";
import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";

import CustomerModel from "../db/sequelize/model/customer.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductModel from "../db/sequelize/model/product.model";

import CustomerRepository from "./customer.repository";
import ProductRepository from "./product.repository";
import OrderRepository from "./order.repository";

describe("OrderRepository", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel,
    ]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a new order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "John Doe");
    const address = new Address("Street", 187, "City", "State", "Zipcode");
    customer.changeAddress(address);
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.id,
      product.name,
      product.price,
      2
    );

    const order = new Order("1", customer.id, [orderItem]);

    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: [OrderItemModel, CustomerModel],
    });

    expect(orderModel?.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: customer.id,
      total: order.total,
      customer: {
        id: customer.id,
        name: customer.name,
        street: address.street,
        number: address.number,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
        rewardPoints: customer.rewardPoints,
        active: customer.active,
      },
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          product_id: orderItem.productId,
          order_id: order.id,
        },
      ],
    });
  });
});
