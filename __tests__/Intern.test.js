const Intern= require('../Lib/Intern');


describe('creates new intern', () => {
    it ("intern name printed", () => {
        const name = "Everyone";
        const newEmp = new Intern(name);
        expect(newEmp.name).toBe(name);
    })
    
    it ("Intern id printed", () => {
        const id = "3";
        const newEmp = new Intern("Everyone", id);
        expect(newEmp.id).toBe(id);
    })
    
    it ("Intern email printed", () => {
        const email = "everyone@hotmail.com";
        const newEmp = new Intern("Everyone", "3", email);
        expect(newEmp.email).toBe(email);
    })

    it ("Intern school printed", () => {
        const school = "EveryoneAcademy";
        const newEmp = new Intern("Everyone", "3", "everyone@hotmail.com", school);
        expect(newEmp.school).toBe(school);
    })

})
