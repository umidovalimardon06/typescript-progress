class Employee {
    protected id!: number;
    protected name!: string;
    protected address!: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getAddress(): string {
        return `${this.name} stays at ${this.address}`
    }

}

let john =
    new Employee(1, 'John Rod', 'Highway street')

//  -----------------------------------------------------------

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getAddress(): string {
        return `${this.name} stays at ${this.address}`
    }
}

let manager = new Manager(2, "Tom", "Nashville")

console.log(manager.getAddress());








