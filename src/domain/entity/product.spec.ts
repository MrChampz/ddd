import Product from "./product";

describe("Product", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Product("", "Product 1", 50)).toThrowError(
      "Id is required"
    );
  });

  it("should throw error when name is empty", () => {
    expect(() => new Product("1", "", 50)).toThrowError("Name is required");
  });

  it("should throw error when price is equal to 0", () => {
    expect(() => new Product("1", "Product 1", 0)).toThrowError(
      "Price must be greater than 0"
    );
  });

  it("should throw error when price is less than 0", () => {
    expect(() => new Product("1", "Product 1", -1)).toThrowError(
      "Price must be greater than 0"
    );
  });

  it("should change name", () => {
    const product = new Product("1", "Product 1", 50);
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });

  it("should change price", () => {
    const product = new Product("1", "Product 1", 50);
    product.changePrice(100);
    expect(product.price).toBe(100);
  });
});
