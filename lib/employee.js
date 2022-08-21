//employee class should include NAME, ID, EMAIL properties and methods.
//all remaining classes will extend from this one.
class employee {
    //properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email= email;
    }

    //methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "employee";
    }
}

module.exports = employee;