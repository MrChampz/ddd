"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("./address");
const customer_1 = require("./customer");
describe("Customer", () => {
    it("should throw error when id is empty", () => {
        expect(() => new customer_1.default("", "John Di Di")).toThrowError("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => new customer_1.default("5", "")).toThrowError("Name is required");
    });
    it("should change name", () => {
        const customer = new customer_1.default("5", "John Di Di");
        customer.changeName("John Doe");
        expect(customer.name).toBe("John Doe");
    });
    it("should activate customer", () => {
        const customer = new customer_1.default("5", "John Di Di");
        customer.address = new address_1.default("Main St", 123, "Anytown", "CA", "90210");
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should throw error when address is not set and try to activate customer", () => {
        const customer = new customer_1.default("5", "John Di Di");
        expect(() => customer.activate()).toThrowError("Address is mandatory to activate a customer");
    });
    it("should deactivate customer", () => {
        const customer = new customer_1.default("5", "John Di Di");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });
});
