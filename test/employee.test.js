const employee = require("../lib/employee");

//test for properties
test("Can create employee instance", () => {
    const x = new employee();
    expect(typeof(x)).toBe("object");
});

test("Can set name", () => {
    const testname = "Jim";
    const x = new employee(testname);
    expect(x.name).toBe(testname);
});

test("Can set id", () => {
    const testId = 12345;
    const x = new employee("Jim", testId);
    expect(x.id).toBe(testId);
});

test("Can set email", () => {
    const testemail = "random@email.com";
    const x = new employee("Jim", 12345, testemail);
    expect(x.email).toBe(testemail);
})

//test for methods
test("Can get name with getName()", () => {
    const testGetName = "Bill";
    const x = new employee(testGetName);
    expect(x.getName()).toBe(testGetName);
});

test("Can get id with getId()", () => {
    const testGetId = 54321;
    const x = new employee("Bill", testGetId);
    expect(x.getId()).toBe(testGetId);
});

test("Can get email with getEmail()", () => {
    const testGetEmail = "test@email.com";
    const x = new employee("Bill", 54321, testGetEmail);
    expect(x.getEmail()).toBe(testGetEmail);
});

test("Employee info should be returned with getRole()", () => {
    const testRole = "employee";
    const x = new employee("Jessica", 67890, "jess@email.com");
    expect(x.getRole()).toBe(testRole);
});