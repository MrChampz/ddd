import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repository/customer.repository";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async find(id: string): Promise<Customer> {
    const customerModel = await CustomerModel.findOne({ where: { id } });

    if (customerModel === null) {
      throw new Error("Customer not found");
    }

    const customer = new Customer(customerModel.id, customerModel.name);
    const address = new Address(
      customerModel.street,
      customerModel.number,
      customerModel.city,
      customerModel.state,
      customerModel.zipcode
    );

    customer.changeAddress(address);

    return customer;
  }

  async findAll(): Promise<Customer[]> {
    const customerModels = await CustomerModel.findAll();

    return customerModels.map((customerModel) => {
      const customer = new Customer(customerModel.id, customerModel.name);
      const address = new Address(
        customerModel.street,
        customerModel.number,
        customerModel.city,
        customerModel.state,
        customerModel.zipcode
      );

      customer.changeAddress(address);

      return customer;
    });
  }

  async create(customer: Customer): Promise<void> {
    await CustomerModel.create({
      id: customer.id,
      name: customer.name,
      street: customer.address.street,
      number: customer.address.number,
      city: customer.address.city,
      state: customer.address.state,
      zipcode: customer.address.zipcode,
      active: customer.active,
      rewardPoints: customer.rewardPoints,
    });
  }

  async update(customer: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: customer.name,
        street: customer.address.street,
        number: customer.address.number,
        city: customer.address.city,
        state: customer.address.state,
        zipcode: customer.address.zipcode,
        active: customer.active,
        rewardPoints: customer.rewardPoints,
      },
      {
        where: {
          id: customer.id,
        },
      }
    );
  }
}
