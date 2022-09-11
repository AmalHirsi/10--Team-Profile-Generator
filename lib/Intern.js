const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Engineer';
    }
    getOfficeNumber() {
        return this.school;
    }
    
}

module.exports = Intern;