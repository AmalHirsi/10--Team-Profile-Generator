const Employee = require('../Lib/Employee');
const Employee = require ('../Lib/Employee');

test('creates new employee', () => {
    const testemployee = new Employee('Someone', 2082 , 'someone@hotmail.com');
    expect(emplyee.name).toEqual(expect.any(String));
    expect(emplyee.id).toEqual(expect.any(Number));
    expect(emplyee.email).toEqual(expect.any(String));

});