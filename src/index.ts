import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("5", "John Di Di");
const address = new Address("Main St", 123, "Anytown", "CA", "90210");
customer.address = address;
customer.activate();

const item1 = new OrderItem("123", "1", "Item 1", 100, 1);
const item2 = new OrderItem("456", "2", "Item 2", 200, 2);
const order = new Order("123", "5", [item1, item2]);
