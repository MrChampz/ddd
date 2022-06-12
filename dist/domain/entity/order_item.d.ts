export default class OrderItem {
    private _id;
    private _productId;
    private _name;
    private _price;
    private _quantity;
    constructor(id: string, productId: string, name: string, price: number, quantity: number);
    validate(): void;
    get price(): number;
}
