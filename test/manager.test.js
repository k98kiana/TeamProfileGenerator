const Manager = require("../lib/Manager");
const employee = require("../lib/employee");

test("Can set office number", () => {
    const testoffice = 1234567890;
    const x = new Manager("Jim", 12345, "random@email.com", testoffice);
    expect(x.officenumber).toBe(testoffice);
});

test("Manager info will be returned via getRole()", () => {
    const testRole = "Manager";
    const x = new Manager("Jim", 12345, "random@email.com", 1234567890);
    expect(x.getRole()).toBe(testRole);
})

test("Can get office number from getOfficeNumber()", () => {
    const testGetOffice = 1234567890;
    const x = new Manager("Jim", 12345, "random@email.com", testGetOffice);
    expect(x.getOfficeNumber()).toBe(testGetOffice);
});