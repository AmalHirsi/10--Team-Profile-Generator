const Engineer= require('../Lib/Engineer');


describe('creates new engineer', () => {
    it ("Engineer name printed", () => {
        const name = "Anyone";
        const newEmp = new Engineer(name);
        expect(newEmp.name).toBe(name);
    })
    
    it ("Engineer id printed", () => {
        const id = "2";
        const newEmp = new Engineer("Anyone", id);
        expect(newEmp.id).toBe(id);
    })
    
    it ("Engineer email printed", () => {
        const email = "anyone@hotmail.com";
        const newEmp = new Engineer("Anyone", "2", email);
        expect(newEmp.email).toBe(email);
    })

    it ("Engineer github printed", () => {
        const github = "anyonegithub";
        const newEmp = new Engineer("Anyone", "2", "anyone@hotmail.com", github);
        expect(newEmp.github).toBe(github);
    })

})
