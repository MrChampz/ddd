import Address from "./address";
import Customer from "./customer";

describe("Customer", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Customer("", "John Di Di")).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => new Customer("5", "")).toThrowError("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("5", "John Di Di");
    customer.changeName("John Doe");
    expect(customer.name).toBe("John Doe");
  });

  it("should activate customer", () => {
    const customer = new Customer("5", "John Di Di");
    const address = new Address("Main St", 123, "Anytown", "CA", "90210");
    customer.changeAddress(address);
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is not set and try to activate customer", () => {
    const customer = new Customer("5", "John Di Di");
    expect(() => customer.activate()).toThrowError(
      "Address is mandatory to activate a customer"
    );
  });

  it("should deactivate customer", () => {
    const customer = new Customer("5", "John Di Di");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer("5", "John Di Di");
    expect(customer.rewardPoints).toBe(0);
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
