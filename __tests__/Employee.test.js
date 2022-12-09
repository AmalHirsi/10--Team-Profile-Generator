const Employee = require('../Lib/Employee');

const testemployee = new Employee('Someone', "1" , 'someone@hotmail.com');

describe('creates new employee', () => {
    it ("Employee name printed", () => {
        const name = "Someone";
        const newEmp = new Employee(name);
        expect(newEmp.name).toBe(name);
    })
    
    it ("Employee id printed", () => {
        const id = "1";
        const newEmp = new Employee("Someone", id);
        expect(newEmp.id).toBe(id);
    })
    
    it ("Employee email printed", () => {
        const email = "someone@hotmail.com";
        const newEmp = new Employee("Someone", "1", email);
        expect(newEmp.email).toBe(email);
    })

})
