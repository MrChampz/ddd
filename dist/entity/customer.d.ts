import Address from "./address";
export default class Customer {
    _id: string;
    _name: string;
    _address: Address;
    _active: boolean;
    _rewardPoints: number;
    constructor(id: string, name: string);
    validate(): void;
    changeName(name: string): void;
    activate(): void;
    deactivate(): void;
    isActive(): boolean;
    addRewardPoints(points: number): void;
    get id(): string;
    get name(): string;
    get rewardPoints(): number;
    set address(address: Address);
}
