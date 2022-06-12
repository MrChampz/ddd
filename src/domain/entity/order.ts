import OrderItem from "./order_item";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this.validate();
    this._total = this.calculateTotal();
  }

  validate() {
    if (this._id.length < 1) {
      throw new Error("Id is required");
    }

    if (this._customerId.length < 1) {
      throw new Error("CustomerId is required");
    }

    if (this._items.length < 1) {
      throw new Error("Item count must be greater than 0");
    }

    this._items.forEach((item) => item.validate());
  }

  calculateTotal(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  get total(): number {
    return this._total;
  }
}
