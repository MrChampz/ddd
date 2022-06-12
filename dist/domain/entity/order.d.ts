import OrderItem from "./order_item";
export default class Order {
    private _id;
    private _customerId;
    private _items;
    private _total;
    constructor(id: string, customerId: string, items: OrderItem[]);
    validate(): void;
    total(): number;
}
