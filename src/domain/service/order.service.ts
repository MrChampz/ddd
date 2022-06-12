import { v4 as uuid } from "uuid";

import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";

export default class OrderService {
  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total() / 2);
    return order;
  }

  static total(orders: Order[]) {
    return orders.reduce((total, order) => total + order.total(), 0);
  }
}
