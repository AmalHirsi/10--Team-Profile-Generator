const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, id, email);
        this.officeNumber = office;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    
}

module.exports = Manager;