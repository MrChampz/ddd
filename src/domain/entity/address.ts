export default class Address {
  _street: string;
  _number: number = 0;
  _city: string;
  _state: string;
  _zipcode: string;

  constructor(
    street: string,
    number: number,
    city: string,
    state: string,
    zipcode: string
  ) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._state = state;
    this._zipcode = zipcode;
    this.validate();
  }

  validate() {
    if (this._street.length < 1) {
      throw new Error("Street is required");
    }

    if (this._number < 1) {
      throw new Error("Number is required");
    }

    if (this._city.length < 1) {
      throw new Error("City is required");
    }

    if (this._state.length < 1) {
      throw new Error("State is required");
    }

    if (this._zipcode.length < 1) {
      throw new Error("Zipcode is required");
    }
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get zipcode(): string {
    return this._zipcode;
  }
}
