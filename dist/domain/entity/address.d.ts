export default class Address {
    _street: string;
    _number: number;
    _city: string;
    _state: string;
    _zipcode: string;
    constructor(street: string, number: number, city: string, state: string, zipcode: string);
    validate(): void;
}
