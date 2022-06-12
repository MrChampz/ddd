import { Sequelize } from "sequelize-typescript";

import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";

describe("CustomerRepository", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "Customer 1");

    const address = new Address(
      "Street 1",
      1,
      "City 1",
      "State 1",
      "Zipcode 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Customer 1",
      street: "Street 1",
      number: 1,
      city: "City 1",
      state: "State 1",
      zipcode: "Zipcode 1",
      active: true,
      rewardPoints: 0,
    });
  });

  it("should update a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "Customer 1");

    const address = new Address(
      "Street 1",
      1,
      "City 1",
      "State 1",
      "Zipcode 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Customer 1",
      street: "Street 1",
      number: 1,
      city: "City 1",
      state: "State 1",
      zipcode: "Zipcode 1",
      active: true,
      rewardPoints: 0,
    });

    customer.changeName("Customer 2");
    customer.changeAddress(
      new Address("Street 2", 2, "City 2", "State 2", "Zipcode 2")
    );

    await customerRepository.update(customer);

    const customerModel2 = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel2?.toJSON()).toStrictEqual({
      id: "1",
      name: "Customer 2",
      street: "Street 2",
      number: 2,
      city: "City 2",
      state: "State 2",
      zipcode: "Zipcode 2",
      active: true,
      rewardPoints: 0,
    });
  });

  it("should find a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "Customer 1");

    const address = new Address(
      "Street 1",
      1,
      "City 1",
      "State 1",
      "Zipcode 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const foundCustomer = await customerRepository.find("1");

    expect(customer).toStrictEqual(foundCustomer);
  });

  it.skip("should throw an error when customer not found", async () => {
    const customerRepository = new CustomerRepository();
    expect(async () => {
      await customerRepository.find("does-not-exist");
    }).toThrowError("Customer not found");
  });

  it("should find all customers", async () => {
    const customerRepository = new CustomerRepository();

    const customer1 = new Customer("1", "Customer 1");
    const address1 = new Address(
      "Street 1",
      1,
      "City 1",
      "State 1",
      "Zipcode 1"
    );
    customer1.changeAddress(address1);
    await customerRepository.create(customer1);

    const customer2 = new Customer("2", "Customer 2");
    const address2 = new Address(
      "Street 2",
      2,
      "City 2",
      "State 2",
      "Zipcode 2"
    );
    customer2.changeAddress(address2);
    await customerRepository.create(customer2);

    const foundCustomers = await customerRepository.findAll();

    expect(foundCustomers).toEqual([customer1, customer2]);
  });
});
