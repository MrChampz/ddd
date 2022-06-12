import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
export default class OrderService {
    static placeOrder(customer: Customer, items: OrderItem[]): Order;
    static total(orders: Order[]): number;
}
