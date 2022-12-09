const Manager= require('../Lib/Manager');


describe('creates new manager', () => {
    it ("Manager name printed", () => {
        const name = "Noone";
        const newEmp = new Manager(name);
        expect(newEmp.name).toBe(name);
    })
    
    it ("Manager id printed", () => {
        const id = "4";
        const newEmp = new Manager("Noone", id);
        expect(newEmp.id).toBe(id);
    })
    
    it ("Manager email printed", () => {
        const email = "noone@hotmail.com";
        const newEmp = new Manager("Noone", "4", email);
        expect(newEmp.email).toBe(email);
    })

    it ("Manager number printed", () => {
        const officeNumber = "1";
        const newEmp = new Manager("Noone", "4", "noone@hotmail.com", officeNumber);
        expect(newEmp.officeNumber).toBe(officeNumber);
    })

})