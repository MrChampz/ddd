export default class Product {
    _id: string;
    _name: string;
    _price: number;
    constructor(id: string, name: string, price: number);
    validate(): boolean;
    changeName(name: string): void;
    changePrice(price: number): void;
    get name(): string;
    get price(): number;
}
